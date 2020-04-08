import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'vet-map',
  styleUrl: 'vet-map.css',
  shadow: true,
})
export class VetMap implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
