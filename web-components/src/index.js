import '../main.css'
// import '@openfonts/nunito_latin-ext';
import gsap from 'gsap';

import "../stencil/dist/veterinamaj"

import VetNavigation from "./components/VetNavigation";
import NavLink from "./components/VetNavigation/NavLink";

// hraje roli pořadí 🍕
customElements.define('nav-link', NavLink);
customElements.define('vet-navigation', VetNavigation);

gsap.fromTo(['.hero-description__header', '.hero-description__subheader'],
    {opacity:0, y:50}, {opacity:1, y:0, stagger:0.6, duration:2});

