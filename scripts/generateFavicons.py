"""Generate circular Himnova brand icons for browsers, PWA, and search results."""
from __future__ import annotations

import io
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"
SOURCE = ROOT / "public" / "logos" / "logo.png"

BG = (11, 15, 25, 255)  # alpine-950
RING = (6, 182, 212, 255)  # brand cyan
RING_INNER = (14, 165, 233, 220)


def circular_mask(size: int) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    return mask


def extract_mark(src: Image.Image) -> Image.Image:
    w, h = src.size
    # The emblem sits in the left square of the wordmark.
    pad = int(h * 0.02)
    crop = src.crop((pad, pad, h - pad, h - pad)).convert("RGBA")
    # Trim near-empty edges so the mark fills the circle cleanly.
    alpha = crop.split()[-1]
    bbox = alpha.point(lambda p: 255 if p > 18 else 0).getbbox()
    if bbox:
        crop = crop.crop(bbox)
    return crop


def make_icon(mark: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), BG)
    draw = ImageDraw.Draw(canvas)

    # Soft cyan halo behind the disk (helps Google's circular crop).
    halo = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    halo_draw = ImageDraw.Draw(halo)
    inset = max(1, size // 48)
    halo_draw.ellipse((inset, inset, size - 1 - inset, size - 1 - inset), fill=RING)
    halo = halo.filter(ImageFilter.GaussianBlur(radius=max(1, size // 28)))
    canvas = Image.alpha_composite(canvas, halo)

    # Solid disk
    draw = ImageDraw.Draw(canvas)
    draw.ellipse((inset, inset, size - 1 - inset, size - 1 - inset), fill=BG)

    # Dual ring (outer cyan, inner teal) — circular SERP look
    ring_w = max(2, size // 22)
    draw.ellipse((inset, inset, size - 1 - inset, size - 1 - inset), outline=RING, width=ring_w)
    inner = inset + ring_w
    draw.ellipse(
        (inner, inner, size - 1 - inner, size - 1 - inner),
        outline=RING_INNER,
        width=max(1, ring_w // 3),
    )

    # Safe zone: keep the mark inside ~72% of the disk (maskable + Google crop).
    inner_size = int(size * 0.62)
    mark_fitted = mark.copy()
    mark_fitted.thumbnail((inner_size, inner_size), Image.Resampling.LANCZOS)
    mx = (size - mark_fitted.width) // 2
    my = (size - mark_fitted.height) // 2 - max(0, size // 80)
    canvas.alpha_composite(mark_fitted, (mx, my))

    # Clip to circle so corners stay the same dark fill (no jagged square on SERP).
    clipped = Image.new("RGBA", (size, size), BG)
    clipped.paste(canvas, (0, 0))
    # Keep square with circular artwork; fill corners with BG so Google circle crop is clean.
    return clipped.convert("RGBA")


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, format="PNG", optimize=True)
    print(f"wrote {path.relative_to(ROOT)} ({path.stat().st_size} bytes)")


def write_svg(png48: Image.Image, path: Path) -> None:
    buf = io.BytesIO()
    png48.save(buf, format="PNG", optimize=True)
    import base64

    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <image href="data:image/png;base64,{b64}" width="48" height="48"/>
</svg>
"""
    path.write_text(svg, encoding="utf-8")
    print(f"wrote {path.relative_to(ROOT)} ({path.stat().st_size} bytes)")


def main() -> None:
    src = Image.open(SOURCE).convert("RGBA")
    mark = extract_mark(src)

    sizes = {
        PUBLIC / "favicon-16x16.png": 16,
        PUBLIC / "favicon-32x32.png": 32,
        PUBLIC / "favicon-48x48.png": 48,
        PUBLIC / "apple-icon.png": 180,
        PUBLIC / "apple-touch-icon.png": 180,
        PUBLIC / "icon-192.png": 192,
        PUBLIC / "icon-512.png": 512,
        PUBLIC / "logos" / "icon-circle.png": 512,
        APP / "icon.png": 32,
        APP / "apple-icon.png": 180,
    }

    generated: dict[int, Image.Image] = {}
    for path, size in sizes.items():
        if size not in generated:
            generated[size] = make_icon(mark, size)
        save_png(generated[size], path)

    ico_images = [make_icon(mark, s) for s in (16, 32, 48)]
    ico_path = PUBLIC / "favicon.ico"
    ico_images[-1].save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_images[:-1],
    )
    print(f"wrote {ico_path.relative_to(ROOT)} ({ico_path.stat().st_size} bytes)")

    write_svg(generated[48], PUBLIC / "favicon.svg")

    preview = PUBLIC / "icon-preview-crop.png"
    if preview.exists():
        preview.unlink()
        print("removed preview crop")


if __name__ == "__main__":
    main()
