from __future__ import annotations

import base64
from io import BytesIO
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCE = PUBLIC / "logos" / "icon-circle.png"


def resize(src: Image.Image, size: int) -> Image.Image:
    return src.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    src = Image.open(SOURCE).convert("RGBA")
    png_sizes = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "favicon-48x48.png": 48,
        "favicon-96x96.png": 96,
        "icon-192.png": 192,
        "icon-512.png": 512,
        "apple-icon.png": 180,
        "apple-touch-icon.png": 180,
    }

    for name, size in png_sizes.items():
        path = PUBLIC / name
        im = resize(src, size)
        im.save(path, format="PNG", optimize=True)
        print(f"wrote {path.name} {path.stat().st_size} {im.size}")

    ico_imgs = [resize(src, s) for s in (16, 32, 48)]
    ico_path = PUBLIC / "favicon.ico"
    ico_imgs[0].save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_imgs[1:],
    )
    print(f"wrote {ico_path.name} {ico_path.stat().st_size}")

    buf = BytesIO()
    resize(src, 96).save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">'
        "<defs><clipPath id=\"round\"><circle cx=\"48\" cy=\"48\" r=\"48\"/></clipPath></defs>"
        '<circle cx="48" cy="48" r="48" fill="#0B0F19"/>'
        f'<image href="data:image/png;base64,{b64}" width="96" height="96" clip-path="url(#round)"/>'
        "</svg>"
    )
    svg_path = PUBLIC / "favicon.svg"
    svg_path.write_text(svg, encoding="utf-8")
    print(f"wrote {svg_path.name} {svg_path.stat().st_size}")


if __name__ == "__main__":
    main()
