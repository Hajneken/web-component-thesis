import { newE2EPage } from '@stencil/core/testing';

describe('vet-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vet-form></vet-form>');

    const element = await page.find('vet-form');
    expect(element).toHaveClass('hydrated');
  });
});
