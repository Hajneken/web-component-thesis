import { newSpecPage } from '@stencil/core/testing';
import { VetForm } from './vet-form';

describe('vet-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VetForm],
      html: `<vet-form></vet-form>`,
    });
    expect(page.root).toEqualHtml(`
      <vet-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vet-form>
    `);
  });
});
