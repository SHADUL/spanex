# SKILL: High-End Motion & Micro-Interactions

## Overview
Enforces physics-driven animation standards and tactile micro-interactions for Spanex Engineering's web components. Eliminates cheap, generic CSS transitions and enforces custom agency-level motion.

## Motion Principles

### 1. Spring Physics Over Fixed Durations
- Never use standard CSS transitions like `transition: all 0.3s ease-in-out`.
- Always use **Framer Motion** spring physics for natural, tactile weight:
  ```tsx
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.8
  }}
  ```

### 2. Mask-Clipped Text Reveals
- Headings and key titles must reveal using an overflow mask rather than a standard fade-in:
  ```tsx
  <div className="overflow-hidden">
    <motion.h1
      initial={{ y: "100%" }}
      whileInView={{ y: "0%" }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      viewport={{ once: true }}
    >
      Precision Engineering
    </motion.h1>
  </div>
  ```

### 3. Tactile Button & Card Micro-Interactions
- Primary Action Buttons: Apply subtle magnetic cursor pulls or high-contrast fill clips on hover.
- Grid Cards:
  - Maximum scale shift: `scale: 1.015` or `translateY(-4px)`.
  - Border highlight transition: Fade in a 1px copper accent line (`#B5732A`) on hover.

### 4. Inertial Scroll & Parallax
- Integrate `Lenis` smooth scroll across the main layout.
- For CAD diagrams and blueprint assets, apply slight structural parallax (`y: useTransform(scrollYProgress, [0, 1], [0, -30])`).
