import {Component, ComponentInterface, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'vet-form',
  styleUrl: 'vet-form.scss',
  shadow: true,
})
export class VetForm implements ComponentInterface {

  // @Watch
  // https://blog.logrocket.com/building-reusable-web-components-with-stencil-js/

  // global form states
  @State() submitted: boolean;
  @State() formValid: boolean;

  //Focused Element
  @State() focused: Element;


  // řešíme to na úrovni inputů
  @State() inputEmailValue: string;
  @State() inputSubjectValue: string;
  @State() inputTextValue: string;


  encode(data){
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.formValid){
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "contact", "email":this.inputEmailValue, "subject":this.inputSubjectValue, "message":this.inputTextValue })
      })
        .then(() => this.submitted = true)
        .catch(error => alert(error));
    }
  };

  validateForm = () => {
    // this.formValid = (this.inputEmailValid && this.inputSubjectValid && this.inputTextValid);
  };


  render() {
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <vet-form-input
            fieldId="emailInput"
            element="input"
            type="email"
            name="email"
            errorMsg={'Musí být ve tvaru nazev@domena.cz'}
          >
            e-mail *
          </vet-form-input>
          <vet-form-input
            fieldId="subjectInput"
            element="input"
            name="subject"
            minChars={2}
            maxChars={40}
          >
            Předmět zprávy *
          </vet-form-input>
          <vet-form-input
            fieldId="messageText"
            name="message"
            element="textarea"
            minChars={5}
            maxChars={2000}
          >
            Vaše zpráva *
          </vet-form-input>
          {/*<div class="form__terms">*/}
          {/*  <span>Odesláním souhlasíte se{' '}</span>*/}
          {/*  <button*/}
          {/*    style={{fontSize:'1.6rem'}}*/}
          {/*    class="link"*/}
          {/*    type="button"*/}
          {/*    onFocus={() => this.validateForm()}*/}
          {/*    aria-label="Otevřít modální dialogové okno s podmínkami"*/}
          {/*    onClick={props.openModal}>zpracováním osobních údajů.</button>*/}
          {/*</div>*/}
          <button
            onMouseOver={() => this.validateForm()}
          >Odeslat</button>
        </form>
    );
  }
}
