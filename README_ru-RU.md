# AnimLP [![npm version](https://badge.fury.io/js/animlp.js.svg)](https://www.npmjs.com/package/animlp.js) [![License: MIT](https://img.shields.io/github/license/alexbol903/animLP.svg?color=green-light)](https://github.com/alexbol903/animLP/blob/master/LICENSE) 

[Documentation - English version](https://github.com/alexbol903/animLP/blob/master/README.md)

### Быстрая и легкая (всего 3kb), библиотека для анимирования веб страниц! ( vanilla JavaScript )



![](https://i.imgur.com/Gw97GlW.gif)
#####
**[>>> DEMO <<<](https://alexbol903.github.io/mizuxe/)**

#####
### Install
```bash
# Install with NPM
$ npm install --save animlp.js

# and with Yarn
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
##### add styles
```scss

#### Добавить фаил со стилями

// Webpack
@import '~animlp.js/lib/css/animLP.css';

// Other
@import './node_modules/animlp.js/lib/css/animLP.css';
```

#####
### Usage
#### Библиотека работает только с классами!

#### Нужно добавить класс "animlp" к элементу, который будет анимироватся.
##### Пример:
```html 
<p class="card__title-1 animlp">Hello world!</p>
```
```js
    import animLP from 'animlp.js';
    
    animLP({
      elements: 
        {
          class: 'card__title-1',     // Класс элемента который будет анимироватся
          duration: 800,              // Время выполнения анимации в милисикундах
          delay: 100,                 // Задержка перед началом анимации в милисикундах
          func: 'ease',               // Функция для выполнения анимации ( например: cubic-bezier.com )
          animation: 'fadeDown'       // Название анимации
        }
      },
      param: {
        once: false                   // Срабатывание анимации "один раз" или "постоянно" - (Boolean)
      }
    });
```

#### Если несколько элементов будут анимироватся то элементы оборачиваются в массив
##### Пример:
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

#### Если у разных элементов одинаковая анимация, классы обернуть в массив
##### Пример:
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
##### Елементы анимируются с помощью CSS.
##### Вся анимация находиться в фаиле animlp.js/lib/css/animLP.css (минифицирован) или animlp.js/lib/scss/animLP.scss.
##### Можно добавить любую свою анимацию в CSS файл и использовать уже свое имя анимации в настройках.

#####
## Animation
#### Анимацию можно посмотреть здесь -> [Animate.css](https://daneden.github.io/animate.css/)

##### Список анимации по умолчанию:
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
##### Эти параметры можно не указывать, сработают параметры по умолчанию
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
