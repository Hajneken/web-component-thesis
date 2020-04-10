import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Watch,
  Element,
} from '@stencil/core';
import gsap from 'gsap';

@Component({
  tag: 'vet-modal',
  styleUrl: 'vet-modal.scss',
  shadow: true,
})
export class VetModal implements ComponentInterface {

  //Props to recieve and mutate
  @Prop({
    reflect:true,
    mutable:true
  }) opened:boolean;

  @Prop() agreeBtnLabel:string;
  @State() prevActiveElement;
  @State() currentFocus: HTMLElement;

  @Element() self: HTMLElement;

  agreeRef!: HTMLButtonElement;
  closingRef!: HTMLButtonElement;

  // for handeling sideeffects
  @Watch('opened')
  toggleModal(){
    if(this.opened){
      gsap.fromTo(
        this.self,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: 0, ease: "power4.out", duration: 0.3 });
      document.body.style.overflow = "hidden";
      this.setCurrentFocus(this.closingRef);
    } else {
      document.body.style.overflow = "";
      this.prevActiveElement.focus()
      gsap.to(
        this.self,
        { opacity: 0, y: "-100%", ease: "power4.in", duration: 0.3 }
      )
    }
  }

  // on mount search for all occurences of modal triggers
  connectedCallback(): void {
    // Init all Modal Triggers
    const btnArray = document.querySelectorAll('._modal-trigger');

    // Init specific trigger from within shadow DOM
    const shadowBtn = document.querySelector('vet-form').shadowRoot.querySelector('._modal-trigger');

    // helper for adding event listener and setting e.target
    const modalTriggerHandler = (e) => {
      this.self.setAttribute('opened','');
      this.prevActiveElement = e.currentTarget;
    }

    !!btnArray && btnArray.forEach(el => {el.addEventListener('click', (e) => modalTriggerHandler(e))})

    shadowBtn.addEventListener('click', (e) => modalTriggerHandler(e))
  }

  handleKeyPress(e){
    if (e.shiftKey){
      switch(e.key) {
        case "Escape":
          this.close(e);
          break;
        case "Tab":
          this.handleTabPrev(e);
          break;
        default:
          break;
      }
    } else {
      switch(e.key) {
        case "Escape":
          this.close(e);
          break;
        case "Tab":
          this.handleTabNext(e);
          break;
        default:
          break;
      }
    }
  }

  handleTabNext = e => {
    if(e.currentTarget === this.agreeRef){
      e.preventDefault();
      this.setCurrentFocus(this.closingRef);
    }
  }

  handleTabPrev = e => {
    if(e.currentTarget === this.closingRef){
      e.preventDefault();
      this.setCurrentFocus(this.agreeRef);
    }
  }

  // for focus within component only
  setCurrentFocus(ref){
    !!ref && ref.focus();
  }

  close(e){
    console.log(e);
    this.opened = !this.opened;
    this.setCurrentFocus(null);
  //  return focus to the last element
  }

  render() {
    return (
      <Host>
        <button
          type="button"
          aria-label="Zavřít"
          class="backdropBtn"
          tabindex={!this.opened ? -1 : 0}
          onClick={(e) => this.close(e)}></button>
        <div class="content" aria-hidden={!this.opened}>
          <button
            type="button"
            class="close"
            ref={(el) => this.closingRef = el as HTMLButtonElement}
            aria-label="Zavřít"
            onClick={(e) => this.close(e)}
            onKeyDown={(e) => this.handleKeyPress(e)}
            tabIndex={!this.opened ? -1 : 0}>Zavřít</button>
            <slot></slot>
          <button
            ref={(el) => this.agreeRef = el as HTMLButtonElement}
            class="agree"
            type="button"
            onKeyDown={(e) => this.handleKeyPress(e)}
            onClick={(e) => this.close(e)}
            tabindex={!this.opened ? -1 : 0}
          >
            {this.agreeBtnLabel || 'Zavřít'}
          </button>
        </div>
      </Host>
    );
  }

}
