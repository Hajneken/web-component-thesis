import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'vet-modal',
  styleUrl: 'vet-modal.css',
  shadow: true,
})
export class VetModal implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
