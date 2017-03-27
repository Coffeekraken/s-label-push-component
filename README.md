# Coffeekraken s-label-push-component <small>0.0.1</small> [![Build Status](https://travis-ci.org/Coffeekraken/s-label-push-component.svg)](https://travis-ci.org/Coffeekraken/s-label-push-component)

Provide a nice label that will slide to the right of his input when the user has focus or content in it

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-label-push-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Javascript API](doc/js)
5. [SASS API](doc/sass)
6. [Sugar Web Components Documentation](https://github.com/Coffeekraken/sugar/blob/master/doc/webcomponent.md)
7. [Browsers support](#readme-browsers-support)
8. [Contribute](#readme-contribute)
9. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
10. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-s-label-push-component --save
```

<a name="readme-get-started"></a>
## Get Started

First, import the component into your javascript file like so:

```js
import SLabelPushComponent from 'coffeekraken-s-label-push-component'
```

Then simply use it inside your html like so:

```html
<label is="s-label-push">
	<input type="text" class="form-input" value="Cool value" />
	<span>Hello world</span>
</label>
<label is="s-label-push" color="primary">
	<input type="text" class="form-input" />
	<span>Hello world</span>
</label>
```

<a id="readme-browsers-support"></a>
## Browsers support

* Chrome *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 10+
* Opera *(latest 2)*
* Safari *(latest 2)*

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...