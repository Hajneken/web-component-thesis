# Getting started 

1. `yarn` or `npm install`
2. `cd stencil`
3. `yarn` or `npm install`

## Development 

> it is advised to first build Custom Element using *StencilJS* and include them in App's `index.html` afterwards

> alternatively build your own vanilla Custom Element and define it afterwards, see `src/components/index.js`

### Recommended workflow

**Stencil local server**
1. `cd stencil`
2. `npm run start`

**Stencil build**
1. `npm run build`

---

**App local server**
1. `cd ~`
2. `yarn start`

**App build**
1. `cd ~`
2. `yarn build`

## Tooling 

- StencilJS
- Webpack (with handful of plugins)
- PostCSS


Webpack set up by following this [tutorial](https://makerbubble.com/building-a-pure-javascript-widget-with-web-components-part-2/)

> web components are on a lower layer, they are not an abstraction that generate DOM, they are HTML elements, you write real representation of the DOM (and relative issues) through new html elements, not "logical" components