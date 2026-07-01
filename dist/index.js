import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import CrazyGLWrapper, { loadGoogleFont, useHeroReady } from '@crazygl/core';
import metadata from './metadata.json';
import './style.css';
const W = { '100': '100', '200': '200', '300': '300', '400': '400', '500': '500', '600': '600', '700': '700', '800': '800', '900': '900' };
function CircularTextProHero(props) {
    const { rootRef, reducedMotion, size, ring1Text = 'EST · 2026 · CRAZYGL · STUDIO · ', ring2Text = 'MOTION · TYPE · CODE · CRAFT · ', ring3Text = 'STAY · CURIOUS · ', centerText = 'PRO', ring1Speed = 28, ring2Speed = 18, ring3Speed = 12, ring2Reverse = true, ring1Color = '#ffffff', ring2Color = '#9aa1ad', ring3Color = '#5b8def', centerColor = '#ffffff', headingFontFamily = 'Inter', headingFontWeight = '600', transparentBackground = false, bgColor = '#0a0c14', } = props;
    useHeroReady(props);
    const weight = W[String(headingFontWeight)] ?? '600';
    const dims = size ?? { width: 1200, height: 720 };
    React.useEffect(() => { if (!headingFontFamily || headingFontFamily === 'Inherit')
        return; try {
        loadGoogleFont(headingFontFamily, { weights: ['400', '500', '600', '700', '800', '900'] });
    }
    catch { /* */ } }, [headingFontFamily]);
    const w = dims.width || 1200, h = dims.height || 720;
    const minDim = Math.min(w, h);
    const reactId = React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
    const ringCfg = [
        { id: 1, r: 0.42, text: ring1Text, color: ring1Color, fontSize: 22, ls: 6, speed: ring1Speed, reverse: false },
        { id: 2, r: 0.32, text: ring2Text, color: ring2Color, fontSize: 18, ls: 4, speed: ring2Speed, reverse: ring2Reverse },
        { id: 3, r: 0.22, text: ring3Text, color: ring3Color, fontSize: 14, ls: 3, speed: ring3Speed, reverse: false },
    ];
    const ff = headingFontFamily && headingFontFamily !== 'Inherit' ? `"${headingFontFamily}", system-ui` : 'system-ui';
    return (_jsxs(_Fragment, { children: [_jsx("crazygl-stage", { style: { background: transparentBackground ? 'transparent' : bgColor } }), _jsx("crazygl-content", { children: _jsxs("div", { className: "crazygl-ctp-wrap", children: [ringCfg.map((cfg) => {
                            const R = cfg.r * minDim;
                            const cx = w / 2, cy = h / 2;
                            const d = `M ${cx},${cy - R} a ${R},${R} 0 1 1 0,${2 * R} a ${R},${R} 0 1 1 0,${-2 * R}`;
                            return (_jsx("div", { className: "crazygl-ctp-ring", style: { animationDuration: `${Math.max(2, cfg.speed)}s`, animationDirection: cfg.reverse ? 'reverse' : 'normal', animationPlayState: reducedMotion ? 'paused' : 'running' }, children: _jsxs("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, "aria-hidden": "true", children: [_jsx("defs", { children: _jsx("path", { id: `cgl-ctp-p${cfg.id}-${reactId}`, d: d }) }), _jsx("text", { fill: cfg.color, fontFamily: ff, fontWeight: weight, fontSize: cfg.fontSize, letterSpacing: `${cfg.ls}px`, children: _jsx("textPath", { href: `#cgl-ctp-p${cfg.id}-${reactId}`, children: (cfg.text || '').repeat(8) }) })] }) }, cfg.id));
                        }), _jsx("div", { className: "crazygl-ctp-center", style: { color: centerColor, fontFamily: ff, fontWeight: weight }, children: _jsx("span", { children: centerText }) })] }) })] }));
}
export default function CircularTextPro(props) { return _jsx(CrazyGLWrapper, { hero: CircularTextProHero, metadata: metadata, ...props }); }
export { metadata };
