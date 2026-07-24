# SKILL: Interactive CAD & Blueprint Component

## Overview
Guidelines for generating high-touch, interactive engineering visualizers, CAD/GIS comparison modules, and SPIDAcalc pole-loading models for case studies.

## Component Specifications

### 1. Dual-View Split Drag Slider
When presenting project case studies, construct an interactive split-canvas visualizer:
- **View A (Raw GIS / Field Survey):** Dark Navy background (`#0F2740`) with 1px blueprint vector gridlines, technical callout dots, and line tension coordinates.
- **View B (Final SPIDAcalc Model):** Crisp off-white rendered engineering vector showing structural pole capacity, guy-wire loads, and conductor spans.
- **Interaction:** Allow users to drag a crisp 1px copper handle left/right to scrub between raw data and final design.

### 2. Live Engineering Metrics Bar
Pair every CAD visualizer with a live stat ticker that animates when scrolled into view:
- **Calculated Sag Tension (lbs/ft)**
- **Max Pole Utilization (%)**
- **Span Clearance Variance (ft)**

### 3. Code Implementation Standard
```tsx
// Structure for CAD comparison component
<div className="relative w-full aspect-[16/9] border border-navy/10 overflow-hidden bg-[#0F2740]">
  {/* Layer 1: Blueprint Vector Lines */}
  <div className="absolute inset-0 stroke-white/20">
    <BlueprintGridSVG/>
  </div>
  
  {/* Layer 2: SPIDAcalc Render Mask */}
  <motion.div 
    className="absolute inset-0 bg-white overflow-hidden"
    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
  >
    <SpidaCalcRenderSVG/>
  </motion.div>

  {/* Divider Line */}
  <div 
    className="absolute top-0 bottom-0 w-[1px] bg-[#B5732A] cursor-ew-resize"
    style={{ left: `${sliderPos}%` }}
  />
</div>
```
