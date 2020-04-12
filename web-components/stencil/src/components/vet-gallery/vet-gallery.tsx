import {Component, ComponentInterface, Host, h, State} from '@stencil/core';
import gsap from 'gsap';


@Component({
  tag: 'vet-gallery',
  styleUrl: 'vet-gallery.scss',
  shadow: true,
})

export class VetGallery implements ComponentInterface {

  @State() opened: boolean;
  @State() currentIndex: number;
  @State() previousActiveElement: HTMLElement;
  @State() currentFocus: HTMLElement;

  closeRef!: HTMLButtonElement;
  prevRef!: HTMLButtonElement;
  nextRef!: HTMLButtonElement;
  fullScreenRef!: HTMLDivElement;
  galleryImgFS!: HTMLImageElement;

  imgArr = [
    {
      src: "/static/media/ambulance.1adec43d.jpg",
      alt: "Ambulance"
    },
    {
      src: "/static/media/cekarna1.c26b8727.jpg",
      alt: "Čekárna"
    },
    {
      src: "/static/media/cekarna2.737bfc99.jpg",
      alt: "Čekárna z pohledu od vchodových dveří"
    },
    {
      src: "/static/media/ordinace.a7ae9ba9.jpg",
      alt: "Ordinace s veterinářem"
    }
  ];

  //   Loop through array of images to find the index of searched image
  initIndex = target => {
    for (let i = 0; i < this.imgArr.length; i++) {
      if (this.imgArr[i].alt === target.alt) {
        return i;
      } else {
      }
    }
  };

  handleOpen = e => {
      this.previousActiveElement = e.currentTarget;
      this.currentIndex = this.initIndex(e.currentTarget);
      this.opened = true;
      this.setCurrentFocus(this.closeRef);

      gsap.fromTo(
        this.fullScreenRef,
        { opacity: 0, x: "100%" },
        { opacity: 1, x: 0, duration: 0.3 }
      );
  };

  handleClose = () => {
    this.opened = false;
    this.currentIndex = null;
    this.currentFocus = null;
    gsap.fromTo(
      //watchout for possible error
      this.fullScreenRef,
      { opacity: 1, x: 0 },
      { opacity: 0, x: "-100%", ease: "power4.out", duration: 0.25 }
    );
  };

  handleNext = () => {
    gsap.fromTo(
      //watchout for possible error
      this.galleryImgFS,
      { opacity: 0, x: "100%" },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.5 }
    );
    this.currentIndex = ((this.currentIndex + 1) % this.imgArr.length);
  };

  handlePrev = () => {
    gsap.fromTo(
      //watchout for possible error
    this.galleryImgFS,
      { opacity: 0, x: "-100%" },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.5 }
    );

    (this.currentIndex === 0) ?
      this.currentIndex=(this.imgArr.length - 1)
      :
      this.currentIndex=((this.currentIndex % this.imgArr.length) -1)
  };

  handleKeyPress = e => {
    if (!!this.opened) {
      switch(e.key) {
        case "Escape":
          this.handleClose();
          break;
        case "ArrowRight":
          this.handleNext();
          break;
        case "ArrowLeft":
          this.handlePrev();
          break;
        case "Tab":
          this.handleFocusChange(e);
          break;
        default:
          break;
      }
    } else {
      (e.key === 'Enter') && this.handleOpen(e);
    }
  };

  // prevent deafult action and watch if shift is pressed
  handleFocusChange = (e) => {
    e.preventDefault();
    if (!e.shiftKey){
      switch(this.currentFocus){
        case this.closeRef:
          this.setCurrentFocus(this.prevRef);
          break;
        case this.prevRef:
          this.setCurrentFocus(this.nextRef);
          break;
        case this.nextRef:
          this.setCurrentFocus(this.closeRef);
          break;
        default:
          break;
      }
    } else {
      switch(this.currentFocus){
        case this.closeRef:
          this.setCurrentFocus(this.nextRef);
          break;
        case this.prevRef:
          this.setCurrentFocus(this.closeRef);
          break;
        case this.nextRef:
          this.setCurrentFocus(this.prevRef);
          break;
        default:
          break;
      }
    }
  }

// for focus within component only
  setCurrentFocus(ref){
    this.currentFocus = ref;
    !!ref && ref.focus();
  }

  render() {
    return (
      <Host
        fullScreen={!!this.opened}
        class="gallery"
        aria-label="Galerie veterinární ambulance">
          <div onKeyDown={this.handleKeyPress}
               aria-hidden={!this.opened}
               role="dialog"
               class="gallery__fullscreen"
               ref={(el) => this.fullScreenRef = el as HTMLDivElement}
               style={!this.opened ? {opacity:"0"} : {opacity:'1'}}
          >
            <button
              type="button"
              onClick={this.handleClose}
              aria-label="Zavřít"
              class="backdropBtn"
              tabindex={!this.opened ? -1 : 0}
            ></button>
            <div class="gallery__img-wrap">
              <img
                ref={(el) => this.galleryImgFS = el as HTMLImageElement}
                aria-labelledby="galleryImgLabel"
                class="gallery__img-fs"
                src={this.opened ? this.imgArr[this.currentIndex].src : ""}
                alt={this.opened ? this.imgArr[this.currentIndex].alt : ""}
              />
              <button
                onClick={this.handleClose}
                aria-label="Zavřít galerii"
                tabindex={!this.opened ? -1 : 0}
                ref={(el) => this.closeRef = el as HTMLButtonElement}
              >
                <img src="/static/media/close.18445307.svg" alt="Zavřít" />
              </button>
              <button
                aria-label="Předchozí obrázek"
                onClick={this.handlePrev}
                tabindex={!this.opened ? -1 : 0}
                ref={(el) => this.prevRef = el as HTMLButtonElement}
                class="left"
              >
                <img src="/static/media/galleryArrow.be237328.svg" alt="" />
              </button>
              <button
                onClick={this.handleNext}
                tabindex={!this.opened ? -1 : 0}
                aria-label="Další obrázek"
                ref={(el) => this.nextRef = el as HTMLButtonElement}
                class="right"
              >
                <img src="/static/media/galleryArrow.be237328.svg" alt="" />
              </button>
              <p id="galleryImgLabel" class="img__label">
                {this.opened ? this.imgArr[this.currentIndex].alt : ""}
              </p>
              <p class="img__count">
                {this.currentIndex + 1 + " / " + this.imgArr.length}
              </p>
            </div>
          </div>
          {this.imgArr.map(el => (
            <img
              onClick={this.handleOpen}
              onKeyDown={this.handleKeyPress}
              tabindex="0"
              src={el.src}
              alt={el.alt}
              key={el.src}
              class="gallery__img"
            />
          ))}

      </Host>
    );
  }

}
