#!/usr/bin/env python3
"""Fetch Boris Oskolkov's Google Scholar citation count and write public/scholar.json.

Exits non-zero on failure so the GitHub Actions workflow does not commit a bad value.
The 'Citations (all)' figure lives in the first <td class="gsc_rsb_std"> of the
profile page's right-hand citation metrics table.
"""

from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

import requests
from bs4 import BeautifulSoup

SCHOLAR_USER_ID = "40ITeewAAAAJ"
SCHOLAR_URL = (
    f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en"
)
OUTPUT_PATH = Path("public/scholar.json")

# Realistic UA so we don't get trivially blocked.
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
}


def fetch_citations() -> int:
    resp = requests.get(SCHOLAR_URL, headers=HEADERS, timeout=30)
    if resp.status_code != 200:
        raise RuntimeError(
            f"Scholar returned HTTP {resp.status_code} "
            f"(likely CAPTCHA/block); body length={len(resp.text)}"
        )
    if "gsc_rsb_st" not in resp.text:
        raise RuntimeError(
            "Scholar response did not contain expected metrics table "
            "(possible CAPTCHA page)."
        )

    soup = BeautifulSoup(resp.text, "html.parser")
    cells = soup.select("td.gsc_rsb_std")
    if len(cells) < 1:
        raise RuntimeError("Citation cells not found on profile page.")

    raw = cells[0].get_text(strip=True).replace(",", "")
    if not raw.isdigit():
        raise RuntimeError(f"Citation cell did not parse as int: {raw!r}")
    return int(raw)


def main() -> int:
    try:
        citations = fetch_citations()
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: failed to fetch citation count: {exc}", file=sys.stderr)
        return 1

    payload = {
        "citations": citations,
        "updatedAt": datetime.now(timezone.utc)
        .isoformat(timespec="seconds")
        .replace("+00:00", "Z"),
        "source": "https://scholar.google.com/citations?user=" + SCHOLAR_USER_ID,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"OK: wrote {OUTPUT_PATH} with citations={citations}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
