
import gsap from 'gsap';

const links = [
    {
        targetId: "hours",
        label: "Ordinační hodiny",
        svg: `<svg
            class="svg-icon"
            enable-background="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            >
            <circle cx="386" cy="210" r="20" />
            <path d="m432 40h-26v-20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91v-20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90v-20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-25c-44.112 0-80 35.888-80 80v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20h-153c-22.056 0-40-17.944-40-40v-312c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20v-20h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20v-114c0-44.112-35.888-80-80-80z" />
            <path d="m391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z" />
            <path d="m420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
            <circle cx="299" cy="210" r="20" />
            <circle cx="212" cy="297" r="20" />
            <circle cx="125" cy="210" r="20" />
            <circle cx="125" cy="297" r="20" />
            <circle cx="125" cy="384" r="20" />
            <circle cx="212" cy="384" r="20" />
            <circle cx="212" cy="210" r="20" />
            </svg>`
    },
    {
        targetId: "about",
        label: "Služby",
        svg: `<svg
        class="svg-icon"
        enable-background="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
            >
            <path d="m315.79 19.932h-59.796v37.372h41.109v70.384c0 61.82-50.297 112.12-112.12 112.12s-112.12-50.296-112.12-112.12v-70.385h39.864v-37.372h-58.55c-10.321 0-18.686 8.365-18.686 18.686v89.071c0 82.431 67.058 149.49 149.49 149.49s149.49-67.058 149.49-149.49v-89.071c0-10.321-8.365-18.686-18.686-18.686z" />
        <path d="m388.67 292.75v88.448c0 51.518-41.913 93.431-93.431 93.431s-93.431-41.913-93.431-93.431v-122.08h-37.372v122.08c0 72.122 58.674 130.8 130.8 130.8 72.122 0 130.8-58.681 130.8-130.8v-88.448h-37.372z" />
        <path d="m407.36 171.91c-38.132 0-69.145 31.013-69.145 69.139 0 38.12 31.013 69.139 69.139 69.139s69.139-31.019 69.145-69.139c-1e-3 -38.126-31.019-69.139-69.139-69.139zm-6e-3 100.91c-17.521 0-31.773-14.251-31.773-31.766s14.251-31.766 31.773-31.766c17.515 0 31.766 14.251 31.766 31.766s-14.251 31.766-31.766 31.766z" />
        <path d="m112.11 0c-10.321 0-18.686 8.365-18.686 18.686v39.864c0 10.321 8.365 18.686 18.686 18.686s18.686-8.365 18.686-18.686v-39.864c0-10.321-8.365-18.686-18.686-18.686z" />
        <path d="M256.62,0c-10.321,0-18.686,8.365-18.686,18.686V58.55c0,10.321,8.365,18.686,18.686,18.686s18.686-8.365,18.686-18.686    V18.686C275.306,8.365,266.941,0,256.62,0z" />
        </svg>`
    },
    {
        targetId: "contact",
        label: "Kontakt",
        svg: `<svg
        class="svg-icon"
        enable-background="new 0 0 511.874 511.874"
        version="1.1"
        viewBox="0 0 511.87 511.87"
        xmlns="http://www.w3.org/2000/svg"
            >
            <path d="m490.11 12.813h-357.55c-12.012 0.014-21.746 9.748-21.76 21.76v98.62l-16.35-24.525c-7.484-11.289-22.535-14.676-34.133-7.68l-33.638 20.224c-11.016 6.464-19.097 16.946-22.545 29.244-12.271 44.681-3.166 121.66 109.82 234.67 89.855 89.762 156.85 113.94 203.02 113.94 10.69 0.049 21.339-1.34 31.659-4.13 12.293-3.448 22.775-11.518 29.252-22.519l20.198-33.673c6.968-11.589 3.584-26.609-7.68-34.091l-80.546-53.692c-11.049-7.308-25.859-4.905-34.031 5.521l-23.45 30.148c-2.451 3.226-6.897 4.166-10.445 2.21l-4.463-2.458c-14.686-8.004-32.964-17.971-69.879-54.886-3.994-3.994-7.612-7.731-11.008-11.307h333.52c11.982 9e-3 21.713-9.676 21.76-21.658v-263.95c-0.014-12.012-9.748-21.746-21.76-21.76zm-260.8 388.55 4.335 2.381c10.897 6.093 24.614 3.266 32.213-6.639l23.45-30.148c2.666-3.396 7.49-4.179 11.093-1.801l80.546 53.692c3.659 2.439 4.759 7.321 2.5 11.093l-20.198 33.673c-4.218 7.233-11.071 12.553-19.123 14.848-40.337 11.093-110.93 1.707-218.08-105.45s-116.5-177.74-105.43-218.04c2.293-8.051 7.61-14.903 14.839-19.123l33.673-20.207c3.773-2.254 8.652-1.155 11.093 2.5l53.717 80.546c2.382 3.602 1.599 8.43-1.801 11.093l-30.157 23.458c-9.903 7.597-12.731 21.311-6.639 32.205l2.389 4.335c8.533 15.65 19.14 35.123 57.805 73.779 38.666 38.657 58.131 49.272 73.772 57.806zm265.49-102.84c-0.028 2.567-2.127 4.627-4.693 4.608h-348.91c-11.083-12.674-20.64-26.604-28.476-41.506l-2.458-4.48c-1.96-3.54-1.022-7.982 2.202-10.428l30.157-23.458c10.43-8.17 12.833-22.982 5.521-34.031l-20.275-30.43v-124.23c-0.014-1.249 0.476-2.451 1.359-3.334s2.085-1.373 3.334-1.359h357.55c1.249-0.014 2.451 0.476 3.334 1.359s1.373 2.085 1.359 3.334v263.95z" />
        <path d="m460.72 52.323-142.62 108.16c-4.035 2.932-9.499 2.932-13.534 0l-142.56-108.16c-3.756-2.849-9.111-2.113-11.959 1.643-2.849 3.756-2.113 9.111 1.643 11.959l142.58 108.15c10.144 7.494 23.989 7.494 34.133 0l142.63-108.15c1.805-1.368 2.992-3.398 3.299-5.642s-0.29-4.518-1.661-6.321c-2.848-3.749-8.194-4.482-11.947-1.639z" />
        <path d="m238.52 174.79-87.415 93.611c-3.214 3.447-3.025 8.848 0.422 12.062s8.848 3.025 12.062-0.422l87.416-93.653c2.888-3.484 2.553-8.617-0.762-11.698-3.316-3.081-8.46-3.037-11.723 0.1z" />
        <path d="m384.73 174.79c-3.214-3.447-8.614-3.637-12.062-0.422-3.447 3.214-3.637 8.614-0.422 12.062l87.39 93.611c3.214 3.447 8.614 3.637 12.062 0.422 3.447-3.214 3.637-8.614 0.422-12.062l-87.39-93.611z" />
        </svg>`

    },
    {
        targetId: "end",
        label: "Kudy k nám",
        svg: `<svg
        class="svg-icon"
        enable-background="new 0 0 426.667 426.667"
        version="1.1"
        viewBox="0 0 426.67 426.67"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
            >
            <path d="m213.33 0c-82.453 0-149.33 66.88-149.33 149.33 0 112 149.33 277.33 149.33 277.33s149.33-165.33 149.33-277.33c1e-3 -82.453-66.879-149.33-149.33-149.33zm0 202.67c-29.44 0-53.333-23.893-53.333-53.333s23.893-53.334 53.333-53.334 53.333 23.893 53.333 53.333-23.893 53.334-53.333 53.334z" />
        </svg>`
    }
];

const template = document.createElement('template');
template.innerHTML = `
<style>nav{height:100%;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:65px;box-shadow:var(--shadow-color)}@media (min-width:768px){nav{grid-template-columns:4fr repeat(4,100px) 1fr;box-shadow:unset}}nav nav-link:not(:last-child){border-right:1px solid #98b7f4}@media (min-width:768px){nav nav-link:not(:last-child):first-child{grid-column:2/3}nav nav-link:not(:last-child):last-child{grid-column:-2/-3}}</style>
    <nav></nav>
`

class VetNavigation extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode:'open'})
        // create shadowRoot and append nav
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.nav = this.shadowRoot.querySelector('nav');
        this.activeLink = null;

        // Binding
        this.initNavLinks = this.initNavLinks.bind(this);
        this.initObserver = this.initObserver.bind(this);
        this.setActiveLink = this.setActiveLink.bind(this);
    }

    connectedCallback() {
        // here is where nav with links should be rendered
        this.initNavLinks(links);
        this.initObserver();
        let mql = window.matchMedia("(max-width: 768px)");
        if (mql.matches) {
            gsap.fromTo(
                this.nav,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, ease: "Bounce.easeOut", duration: 1.25 }
            );
        } else {
            gsap.fromTo(
                this.nav,
                { opacity: 0, y: -40 },
                { opacity: 1, y: 0, ease: "Bounce.easeOut", duration: 1.25 }
            );
        }
    }

    initNavLinks(array){
        links.forEach(link => {
            const el = document.createElement('nav-link');
            el.link = link;
            this.nav.appendChild(el);
        })
    }

    initObserver() {
        // jména všech sekcí to observe
        const observer = new IntersectionObserver(
            (entries, observer) => {
                // if we scroll over section
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        for (let i = 0; i < links.length ; i++) {
                            entry.target.id === links[i].targetId && this.setActiveLink(i);
                        }
                    }
                });
            },
            {
                rootMargin: "0px 0px",
                threshold: 0.8
            }
        );

        // vrať pole všech elementů s targetId a pro každý prvek pozoruj
        links.map(e => document.getElementById(e.targetId))
            .forEach(section => observer.observe(section));

        const observer2 = new IntersectionObserver(
            (entries, observer2) =>{
                entries.forEach(entry => {
                    entry.isIntersecting && gsap.to(
                        entry.target,
                        { opacity: 1, x: 0, ease: "back.out(1.4)", duration: 1.25 }
                    );
                });
            },
            {
                rootMargin: "0px 0px",
                threshold: 0.5
            }
        )

        const animArr = document.querySelectorAll('.animate');
        animArr.forEach(el => observer2.observe(el));
    }

    setActiveLink(index){
        // select link from list of nav-link elements
        const navLinkArray = this.nav.querySelectorAll('nav-link');
        if(this.activeLink === null){
            navLinkArray[index].setAttribute('active', '')
        } else {
            this.activeLink.removeAttribute('active');
            navLinkArray[index].setAttribute('active', '');
        }
        this.activeLink = navLinkArray[index];
    }
}


export default VetNavigation;
