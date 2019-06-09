# AnimLP [![npm version](https://badge.fury.io/js/animlp.js.svg)](https://www.npmjs.com/package/animlp.js) [![License: MIT](https://img.shields.io/github/license/alexbol903/animLP.svg?color=green-light)](https://github.com/alexbol903/animLP/blob/master/LICENSE) 

[Documentation - Russian version](https://github.com/alexbol903/animLP/blob/master/README_ru-RU.md)

### Fast and lightweight (only 3kb), a library for scroll animation web pages! ( vanilla JavaScript )


![](https://i.imgur.com/Gw97GlW.gif)
#####
**[>>> DEMO <<<](https://alexbol903.github.io/mizuxe/)**

#####
### Install
```bash
# Install with NPM
$ npm install --save animlp.js

# Install with Yarn
$ yarn add animlp.js
```


#####
### Setup
```js
// ES Modules
import animLP from 'animlp.js';

// CommonJS modules
var animLP = require('animlp.js');
```
```html
// Add the script with CDN
<script src="https://unpkg.com/animlp.js@0.9.2/lib/animLP.min.js"></script>
```

#### add styles
```scss

// Webpack
@import '~animlp.js/lib/css/animLP.css';

// Other
@import './node_modules/animlp.js/lib/css/animLP.css';
```
```html
// Add the style with CDN
<link rel="stylesheet" href="https://unpkg.com/animlp.js@0.9.2/lib/css/animLP.css">
```

#####
### Usage
**The library works only with classes!**

#### You need to add the class "animlp" to the element that will be animated.
##### Example:
```html 
<p class="card__title-1 animlp">Hello world!</p>
```
```js
    import animLP from 'animlp.js';
    
    animLP({
      elements: 
        {
          class: 'card__title-1',     // The class of the element to be animated.
          duration: 800,              // Animation time in ms
          delay: 100,                 // Delay before animation starts
          func: 'ease',               // The function to perform the animation ( for example: cubic-bezier.com )
          animation: 'fadeDown'       // Animation name
        }
      },
      param: {
        once: false                   // Trigger animation "once" or "constantly"
      }
    });
```

#####
#### If several elements are animated, the elements are wrapped in an array.
##### Example:
```html
<p class="card__title-1 animlp">Hello world!</p>
<p class="card__title-2 animlp">Hello world again!!!</p>
```
```js
import animLP from 'animlp.js';
    
animLP({
  elements: [
    {
      class: 'card__title-1',
      duration: 800,
      delay: 100,
      func: 'ease',
      animation: 'fadeDown'
    },
    {
      class: 'card__title-2',
      duration: 1000,
      delay: 300,
      func: 'ease-in-out',
      animation: 'fadeUp'
    }
  ],
  param: {
    once: false
  }
});
```
#####
#### If different elements have the same animation, wrap the classes in an array.
##### Example:
```html
<p class="card__title-1 animlp">Hello world!</p>
<p class="card__title-2 animlp">Hello world again!!!</p>
<p class="card__title-3 animlp">Yes, You know</p>
```
```js
import animLP from 'animlp.js';
    
animLP({
  elements: [
    {
      class: ['card__title-1', 'card_title-3'],
      duration: 800,
      delay: 100,
      func: 'ease',
      animation: 'fadeDown'
    },
    {
      class: 'card__title-2',
      duration: 1000,
      delay: 300,
      func: 'ease-in-out',
      animation: 'fadeUp'
    }
  ],
  param: {
    once: false
  }
});
```

#####
## Customization
##### Elements are animated with CSS.
##### The whole animation is in the file `animlp.js/lib/css/animLP.css` (minified) or `animlp.js/lib/scss/animLP.scss`.
##### You can add any of your animation in the CSS file and use your animation name in the settings.

#####
## Animation
#### Animation can be seen here. -> [Animate.css](https://daneden.github.io/animate.css/)

#### Animation list:
* `pulse`
* `rubberBand`
* `bounce`
* `bounceIn`
* `bounceDown`
* `bounceLeft`
* `bounceRight`
* `bounceUp`
* `fade`
* `fadeDown`
* `fadeLeft`
* `fadeRight`
* `fadeUp`
* `flipX`
* `flipY`
* `lightSpeed`
* `rotate`
* `rotateDownLeft`
* `rotateDownRight`
* `rotateUpLeft`
* `rotateUpRight`
* `jackTheBox`
* `roll`
* `zoom`
* `zoomDown`
* `zoomLeft`
* `zoomRight`
* `zoomUp`

#####
## Default options
#### These parameters can be omitted, the default parameters will work.
| Property  | Type  | Default   |
|-----------|-------|-----------|
|`duration` | Number| **500**   |
|`delay`    | Number| **0**     |
|`func`     | String| **ease**  |
|`animation`| String| **fadeUp**|
|           |       |           |
|           |       |           |
|`once`     |Boolean| **true**  |

#####
## License
#### Created by [Alexey Bolotin](https://github.com/alexbol903). Released under the [MIT License](https://github.com/alexbol903/animLP/blob/master/LICENSE).
