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
            <style>a{padding:0 .8rem;position:relative;display:flex;flex-direction:column;justify-content:space-evenly;text-transform:uppercase;text-align:center;height:100%;text-decoration:none;color:var(--black);font-weight:700;transition:all .25s ease-in-out;box-shadow:0 0 10px 7px rgba(89,128,205,.15)}a:before{opacity:1;z-index:1;background:linear-gradient(180deg,#fff,#eef0f4)}a:after,a:before{position:absolute;content:"";width:100%;height:100%;left:0;top:0}a:after{opacity:0;z-index:2;background:linear-gradient(180deg,var(--primary),var(--primary-darker))}a.active,a:hover{-webkit-animation:bounce .15s;animation:bounce .15s;background:transparent;color:var(--secondary)}a.active:after,a:hover:after{opacity:1}a.active:before,a:hover:before{opacity:0}a.active svg,a:hover svg{fill:var(--secondary);-webkit-animation:bounce .15s;animation:bounce .15s}a svg{fill:var(--primary);height:45%}a span,a svg{z-index:3}@-webkit-keyframes bounce{0%{transform:scale(1)}50%{transform:scale(1.09)}to{transform:scale(1)}}@keyframes bounce{0%{transform:scale(1)}50%{transform:scale(1.09)}to{transform:scale(1)}}</style>
            <a href="#${link.targetId}">
               ${link.svg}
               <span>${link.label}</span>
            </a>`
    }
}

export default NavLink;