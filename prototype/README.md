# Party Starter 🎈🎉

> Your new favourite boilerplate for kicking off a new project without any hustle. 

Feel free to jumpstart your project using this template 🙌

## Getting started 

1. Install latest [Node](https://nodejs.org/en/)
1. Install [Yarn](https://yarnpkg.com/en/docs/install) 
1. Run `yarn`
1. Develop your amazing app 
1. Run `gulp party` 
1. Deploy & Party 🎉

## Dead Simple Structure

This boilerplate uses `gulp` tasks found in `gulpfile.js` 

Also note that for convenience sake, `yarn` is used. Learn more about [why](https://yarnpkg.com/en/docs/pnp) I choose it over npm. (It's faster 🏎)

### Application 

Generated production-ready files are available in `/app`

### Resources

As a developer, you'll be spending most of the time here.

SASS is used as CSS preprocessor and all parts come together in 
`/resources/bootstrap/main.scss`.

Note that when creating new component, you preferably should create a new scss file and then import it in `main.scss`.

Also it is highly encouraged to use only those parts of Bootstrap that you really need to avoid unnecessary bulk. You can choose those in `/resources/bootstrap/bootstrap.scss`

#### Shame

What's this `shame.scss` you might ask. Well, do you know that time when you just wanted to try something and it become a component all of a sudden? Well, here is a solution to your problem. This file will help you to write your magic code first without needing to think about the structure, name etc. 
Before pushing, however, make sure you have all your components neatly in components directory and `shame.scss` is empty, otherwise shame on you 😉

### Minification 

> Tools for speedy performance

Tools:
- HTML
    - **htmlmin**
- CSS
    - **Minify-css**
- JS  
    - **Babel**
    - **Uglify**
- images (.JPEG, .PNG, .SVG)
    - **imagemin**

Write your JS as you please. **Babel** will then compile your code to backwards compatible JS so that oldies understand what is going on. **Uglify** will compress your compiled code to achieve desired speed that your users deserve.
