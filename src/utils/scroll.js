// Smooth scroll powered by Lenis, synced to GSAP's animation loop.
// Automatically disables inside the Webflow Editor so you can
// still scroll normally while designing.

import { handleEditor } from "../webflow/detect-editor.js";

export function initScroll() {
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  gsap.ticker.add((time) => lenis.raf(time * 1000));

  // Disable in the Webflow Editor
  handleEditor((isEditor) => {
    if (isEditor) lenis.destroy();
    else lenis.start();
  });

  return lenis;
}
