# SKILL: Code Review & Anti-AI Audit

## Overview
Acts as a strict design auditor to purge generic "AI-generated" tropes, boilerplate Tailwind templates, and clunky layouts from the codebase.

## Audit Checklist & Refactoring Rules

### 1. Corners & Borders (Anti-AI Rule #1)
- **Flag:** `rounded-2xl`, `rounded-3xl`, or heavy `drop-shadow-lg`.
- **Refactor:** Replace with crisp, sharp edges (`rounded-none` or `rounded-sm`) and thin structural borders (`border border-navy/10` or `border-neutral-200`).

### 2. Colors & Gradients (Anti-AI Rule #2)
- **Flag:** Rainbow gradients (`from-indigo-500 to-purple-600`), floating glowing background blurs (`blur-3xl opacity-30`), or heavy glassmorphism.
- **Refactor:** Enforce strict corporate utility palette:
  - Navy: `#0F2740`
  - Copper Accent: `#B5732A`
  - Clean Background: `#FFFFFF` or `#F8F9FA`

### 3. Typography Hierarchy
- **Flag:** Unstructured headings with default line heights and loose text contrast.
- **Refactor:**
  - Headings: Bold, tight line-height (`leading-[0.95] tracking-tight`).
  - Metadata / Captions: Small uppercase, wide tracking (`text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-mono`).

### 4. Spacing & Structure
- Ensure sections have generous vertical breathing room (`py-24 md:py-32`).
- Check that layout elements align strictly to a multi-column Swiss architectural grid.
