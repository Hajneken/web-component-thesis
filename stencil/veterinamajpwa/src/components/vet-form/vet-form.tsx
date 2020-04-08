import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'vet-form',
  styleUrl: 'vet-form.css',
  shadow: true,
})
export class VetForm implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
