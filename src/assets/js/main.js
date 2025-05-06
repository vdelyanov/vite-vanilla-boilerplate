// Initialize Lenis
import Lenis from 'lenis'
const lenis = new Lenis({
    autoRaf: true,
  });

import { gsap } from "gsap";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener('DOMContentLoaded', () => {
 
  alert('kur')

})