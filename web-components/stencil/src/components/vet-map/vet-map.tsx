import {Component, ComponentInterface, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'vet-map',
  styleUrl: 'vet-map.scss',
  shadow: true,
})
export class VetMap implements ComponentInterface {

  @Prop() provider:string;
  @Prop() title:string;
  @Prop() src:string;
  @Prop() height:string;
  @Prop() width:string;

  render() {
    return (
      <Host>
        {this.provider === "MapyCZ" &&
        <iframe
          title={this.title || 'Lokace ordinace'}
          src={this.src || "https://en.frame.mapy.cz/s/gofepedeja"}
          width={this.width || '100%'}
          height={this.height || '450'}
          frameBorder="0" />
        }
        {(this.provider === "Google" || !this.provider) &&
        <iframe
          title={this.title || 'Lokace ordinace'}
          src={this.src || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.495232330495!2d14.435563662154644!3d48.983054046178445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d2fc949d3c84660!2sMVDr.%20Dana%20Zemancov%C3%A1!5e0!3m2!1sen!2scz!4v1584136823572!5m2!1sen!2scz"}
          width={this.width || '100%'}
          height={this.height || '450'}
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tab-index="0" />
        }
      </Host>
    );
  }

}
