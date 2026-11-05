# Site images

All of these were rendered from the PDFs in your `Website materials` Drive folder,
so everything on the site is live — there are no empty placeholders left.

| File | Where it appears | Source |
|---|---|---|
| `cover.jpg` | Home page hero | Crop of the Arctic globe from `ArcticSeaIceLayout.pdf` |
| `ocean-cdr-comparison.png` | Ocean carbon — Figure 1 | `Comparison_OAE.pdf` |
| `ocean-cdr-layout.png` | Ocean carbon — Figure 2 | `HNLC_OAE.pdf` |
| `ocean-cdr-physical.png` | Ocean carbon — Figure 3 | `Physical_OAE.pdf` |
| `arctic-sst-layout.png` | Arctic — Figure 1 | `ArcticSeaIceLayout.pdf` |
| `wildfire-layout.png` | Wildfire — Figure 1 | `Final_fire_layout.pdf` |
| `wind-siting-statewide.png` | Wind siting — Figure 1 | `Wind_layout_2.2.pdf` |
| `wind-siting-layout.png` | Wind siting — Figure 2 | `Windfarm_1.pdf` |
| `*-thumb.png` | Home page cards | Downscaled from the layouts above |
| `../video/ice-retreat.mp4` | Arctic — Figure 2 | `IceRetreat.mp4` |

The old `cover.svg` placeholder has been removed.

## Re-rendering

Layouts were rasterised at 1900 px wide from the source PDFs, thumbnails at 900 px.
If you replace a layout, export from ArcGIS Pro with `Share → Export Layout` → PNG at
150–200 dpi rather than swapping in a PDF — the originals run 11–116 MB each, which is
far too heavy to serve.

## Swapping the cover

The hero image is a crop of the Arctic globe taken from the full layout, chosen to avoid
the title text and chart baked into it. To use a different map, save it as `cover.jpg`
at roughly 2000 px wide and 16:9. A dark image works best — the hero applies a dark
gradient over the top and sets white type on it.
