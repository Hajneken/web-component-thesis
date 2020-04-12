import {Component, ComponentInterface, Host, State, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'vet-form-input',
  styleUrl: 'vet-form-input.scss',
  shadow: true,
})
export class VetFormInput implements ComponentInterface {

  @Event() refreshInputValue: EventEmitter;

  refreshForm(value) {
    this.refreshInputValue.emit({
      data:value,
      origin: this.name
    });
  }

  @State() value: string;
  @State() valid: boolean;
  @State() invalid: boolean;
  @State() focus: boolean;
  @State() filled: boolean;

  @Prop() fieldId:string;
  @Prop({reflect: true}) element:string;
  @Prop() name:string;
  @Prop() type:string;
  @Prop() minChars:number;
  @Prop() maxChars:number;
  @Prop() errorMsg:string;


  // @Listen for value change
  // https://stackoverflow.com/questions/54409584/pass-prop-function-in-custom-web-component-in-stenciljs

  validateEmail = e => {
    const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    (this.valid = mailFormat.test(e.target.value)) && (this.invalid = false)

    !this.valid && (this.invalid = !(mailFormat.test(e.target.value)));
  }

  validateText = e => {
    // stačí validovat pouze jednou na rozdíl u Reactu
    (this.valid = ((e.target.value.length >= this.minChars) && (e.target.value.length <= this.maxChars)));
    (this.invalid = !((e.target.value.length >= this.minChars) || !(e.target.value.length <= this.maxChars)));
  };

  handleInputBlur = (e) => {
    switch (e.target.name) {
        case "email":
          this.validateEmail(e);
          break;
        case "subject":
          this.validateText(e);
          break;
        case "message":
          this.validateText(e);
          break;
        default:
          break;
      }
      // if value not empty set filled attribute
      (this.value !== '') ? (this.filled = true) : (this.filled = false);
    this.focus = false;
    //  send request to validateForm
    this.valid ? this.refreshForm(this.value) : this.refreshForm('');
    }

  //  set value to the state
  handleChange = e => {
    this.value = e.target.value;
  };

  handleFocus = () => {
    this.focus = true;
  }

  render() {
    return (
      <Host element={this.element}
            valid={this.valid}
            invalid={this.invalid}
            focus={this.focus}
            filled={this.filled}
            >
        {this.element === "input" && (
          <input
            id={this.fieldId}
            name={this.name}
            type={!!this.type ? this.type : "text"}
            onInput={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleInputBlur(e)}
            onFocus={() => this.handleFocus()}
            maxLength={this.maxChars}
            minLength={this.minChars}
            value={this.value}
            required
          />
        )}
        {this.element === "textarea" && (
          <textarea
            id={this.fieldId}
            name={!!this.name ? this.name : this.fieldId}
            onInput={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleInputBlur(e)}
            onFocus={() => this.handleFocus()}
            maxLength={this.maxChars}
            minLength={this.minChars}
            value={this.value}
            required
          />
        )}
        <label htmlFor={this.fieldId}>
          <slot/>
        </label>
        {this.invalid && this.value !== '' &&
        <div class="error"
             aria-live="polite">
          {this.errorMsg || `Pole musí obsahovat ${this.minChars} až ${this.maxChars} znaků.`}
        </div>}
      </Host>
    );
  }

}
