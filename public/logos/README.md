# Software logos

The software compatibility bar (`components/pseo/SoftwareBar.tsx`) renders an
official vendor logo from this folder when the file exists, and falls back to a
clean monochrome wordmark badge until you add it.

Drop each vendor's official brand-kit SVG here, named by its tool key:

| File              | Vendor / product        | Official brand assets                        |
| ----------------- | ----------------------- | -------------------------------------------- |
| `autocad.svg`     | Autodesk AutoCAD        | autodesk.com → Brand / Trademark guidelines  |
| `spidacalc.svg`   | Bentley SPIDAcalc       | bentley.com → Brand / press resources        |
| `arcgis.svg`      | Esri ArcGIS             | esri.com → Brand / logo guidelines           |
| `qgis.svg`        | QGIS                    | qgis.org → Visual style / logo (GPL-licensed)|
| `microstation.svg`| Bentley MicroStation    | bentley.com → Brand / press resources        |
| `landbase.svg`    | Landbase                | your internal mark                           |

Trademark note: AutoCAD, SPIDAcalc, ArcGIS and MicroStation are third-party
trademarks owned by their respective vendors. Use each vendor's *official*
assets, follow their trademark/usage guidelines, and only display them where a
genuine "works with / compatible" statement applies — do not imply a partnership
or endorsement you don't have. QGIS artwork is freely licensed (GPL) with
attribution.

Recommended: monochrome (single-colour) SVG versions read best in this bar. Size
is height-constrained to 28px automatically; width scales.
