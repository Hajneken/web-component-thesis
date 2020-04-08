import styles from "./styles.scss";

class NavLink extends HTMLElement{
    constructor() {
        super();
        this.root = this.attachShadow({mode:'open'});

    }

    static get observedAttributes() { return ['active']; }

    attributeChangedCallback(){
        this.hasAttribute('active') && this.root.querySelector('a').classList.add('active');
        !this.hasAttribute('active') && this.root.querySelector('a').classList.remove('active');
    }

    set link(link){
        this.root.innerHTML =
            `
            <style>${styles.toString()}</style>
            <a href="#${link.targetId}">
               ${link.svg}
               <span>${link.label}</span>
            </a>`
    }
}

export default NavLink;