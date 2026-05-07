// Entry point — boots smooth scroll and runs your components.
// GSAP and Lenis are loaded from the CDN (see Dependencies panel).

import { initScroll } from "./utils/scroll.js";
import { hero } from "./components/hero.js";
import { reveal } from "./components/reveal.js";

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll (auto-disables in the Webflow Editor)
initScroll();

// Components — each one targets elements by data attribute.
// Add your own: create a file in components/, import it here, call it.
hero();
reveal();
