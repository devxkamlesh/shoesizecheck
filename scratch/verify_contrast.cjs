// WCAG 2.1 Contrast Ratio Calculator
function getLuminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map(x => {
    const v = parseInt(x, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function getContrast(hex1, hex2) {
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
}

const tests = [
  { name: 'Ink on White', fg: '#111827', bg: '#ffffff' },
  { name: 'Ink on Canvas (#fafafa)', fg: '#111827', bg: '#fafafa' },
  { name: 'Ink on Soft Hairline (#f2f2f2 - table td:first-child)', fg: '#111827', bg: '#f2f2f2' },
  { name: 'Body on White', fg: '#374151', bg: '#ffffff' },
  { name: 'Body on Canvas (#fafafa)', fg: '#374151', bg: '#fafafa' },
  { name: 'Mute on White (mono-eyebrow, etc.)', fg: '#4b5563', bg: '#ffffff' },
  { name: 'Mute on Canvas (#fafafa)', fg: '#4b5563', bg: '#fafafa' },
  { name: 'Faint on White', fg: '#525252', bg: '#ffffff' },
  { name: 'Faint on Canvas (#fafafa)', fg: '#525252', bg: '#fafafa' },
  
  // Dark mode
  { name: 'Dark Ink on #111111', fg: '#f9fafb', bg: '#111111' },
  { name: 'Dark Body on #111111', fg: '#d1d5db', bg: '#111111' },
  { name: 'Dark Mute on #111111', fg: '#9ca3af', bg: '#111111' },
  { name: 'Dark Mute on #0a0a0a', fg: '#9ca3af', bg: '#0a0a0a' },
];

console.log('=== WCAG 2.1 Contrast Ratio Verification (Threshold is 4.5:1) ===');
let allPass = true;
tests.forEach(t => {
  const ratio = parseFloat(getContrast(t.fg, t.bg));
  const pass = ratio >= 4.5;
  if (!pass) allPass = false;
  console.log(`${t.name.padEnd(50)}: ${ratio}:1  [${pass ? 'PASS AA' : 'FAIL'}]`);
});
console.log('All ratios pass WCAG AA >= 4.5:1:', allPass);
