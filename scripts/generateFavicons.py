"""Generate circular Himnova brand icons for browsers, PWA, and search results."""
from __future__ import annotations

import io
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"


def create_clean_emblem() -> Image.Image:
    raw_ico = PUBLIC / "logos" / "himnova.ico"
    with Image.open(raw_ico) as raw:
        img = raw.convert("RGBA").copy()
    w, h = img.size
    
    # 2x supersampled circular mask for clean anti-aliased edge
    scale = 2
    mask_large = Image.new("L", (w * scale, h * scale), 0)
    draw = ImageDraw.Draw(mask_large)
    inset = 2 * scale
    draw.ellipse((inset, inset, w * scale - 1 - inset, h * scale - 1 - inset), fill=255)
    mask = mask_large.resize((w, h), Image.Resampling.LANCZOS)
    
    result = img.copy()
    result.putalpha(mask)
    return result


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, format="PNG", optimize=True)
    print(f"wrote {path.relative_to(ROOT)} ({path.stat().st_size} bytes)")


def main() -> None:
    emblem = create_clean_emblem()
    
    # Save the master transparent emblem
    save_png(emblem, PUBLIC / "logos" / "himnova-circle-transparent.png")
    save_png(emblem, PUBLIC / "logos" / "himnova-icon.png")
    save_png(emblem, PUBLIC / "logos" / "icon-circle.png")

    sizes = {
        PUBLIC / "favicon-16x16.png": 16,
        PUBLIC / "favicon-32x32.png": 32,
        PUBLIC / "favicon-48x48.png": 48,
        PUBLIC / "favicon-96x96.png": 96,
        PUBLIC / "apple-icon.png": 180,
        PUBLIC / "apple-touch-icon.png": 180,
        PUBLIC / "icon-192.png": 192,
        PUBLIC / "icon-512.png": 512,
        APP / "icon.png": 32,
        APP / "apple-icon.png": 180,
    }

    generated: dict[int, Image.Image] = {}
    for path, size in sizes.items():
        if size not in generated:
            res = emblem.resize((size, size), Image.Resampling.LANCZOS)
            generated[size] = res
        save_png(generated[size], path)

    # Multi-resolution ICOs
    fav_ico_path = PUBLIC / "favicon.ico"
    emblem.save(
        fav_ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )
    print(f"wrote {fav_ico_path.relative_to(ROOT)} ({fav_ico_path.stat().st_size} bytes)")

    # Save to src/app/favicon.ico
    app_ico_path = APP / "favicon.ico"
    emblem.save(
        app_ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )
    print(f"wrote {app_ico_path.relative_to(ROOT)} ({app_ico_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
