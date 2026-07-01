<sub>*Hero made by [@ybouane](https://x.com/ybouane).*</sub>
<p align="center">
  <img src="https://crazygl.com/heroes/hero-circular-text-pro/banner-full.png" alt="Circular Text Pro" width="640">
</p>

# @crazygl/hero-circular-text-pro

Three concentric rings of text spinning at independent speeds, with a centred wordmark and accent dots — a fully composed badge.

## Demo
[Circular Text Pro](https://crazygl.com/hero/circular-text-pro)

## Install

```bash
npm install @crazygl/hero-circular-text-pro
```

## Usage

```tsx
import CircularTextPro from '@crazygl/hero-circular-text-pro';

export default function Hero() {
	return (
		<CircularTextPro
			ring1Text="EST · 2026 · CRAZYGL · STUDIO · "
			centerText="PRO"
			ring2Reverse
		/>
	);
}
```

## Customise

- **Content** — `ring1Text`, `ring2Text`, `ring3Text` (each repeated around its circle) and `centerText`.
- **Speeds** — `ring1Speed`, `ring2Speed`, `ring3Speed` (seconds per turn) and `ring2Reverse` to counter-rotate the middle ring.
- **Colours** — per-ring colours, `centerColor`, plus `headingFontFamily` and `headingFontWeight`.
- **Backdrop** — `transparentBackground` or a solid `bgColor`.

## Best for

- Brand badges, logo lockups and "est. / studio" marks.
- Coming-soon and event landing pages wanting a kinetic seal.
- Portfolio or agency sites needing a self-contained typographic centrepiece.



This hero is part of [CrazyGL](https://crazygl.com), a collection of production-ready WebGL, canvas, 3D, and typography effects. Every CrazyGL hero ships with an agent-ready `SKILL.md` file that helps developers and coding agents adapt the effect into custom landing pages and interactive experiences.
