import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'vet-gallery',
  styleUrl: 'vet-gallery.css',
  shadow: true,
})
export class VetGallery implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
