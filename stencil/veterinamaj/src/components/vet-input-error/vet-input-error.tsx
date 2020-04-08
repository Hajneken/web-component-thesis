import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'vet-input-error',
  styleUrl: 'vet-input-error.css',
  shadow: true,
})
export class VetInputError implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
