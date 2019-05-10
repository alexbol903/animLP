(() => {
  const animLP = prop => {
    const property = prop;

    class AnimLP {
      constructor() {
        this._elem = [];
        this._param = {
          once: true
        };
      }

      get elem() {
        return this._elem;
      }

      get param() {
        return this._param;
      }

      set elem(value) {
        if (!value) return;
        this._elem.push(value);
      }

      clearElem() {
        this._elem = [];
        return this;
      }

      clearParam() {
        this._param = {
          startAnim: .1,
          once: true
        };
        return this;
      }

      set param(value) {
        if (!value) return;
        const param = this.param;
        for (let key in value) {
          if (param.hasOwnProperty(key)) {
            let prop = value[ key ];
            this._param[ key ] = prop;
          }
        }
      }

      addElem(elem) {

        let el;

        const createElem = (className = null, elem) => {
          const domElem = document.querySelectorAll(`.${className}`)
          if (!domElem.length) throw new Error(`Class "${className}" is not found`);
          for (let i = 0; i < domElem.length; i++) {
            const item = {
              domElem: domElem[ i ],
              duration: elem.duration || 500,
              delay: elem.delay || 0,
              animation: elem.animation || 'fadeUp',
              func: elem.func || 'ease',
              isReady: true
            }
            this.elem = item;
          }
        };

        function eachElem() {
          for (let i = 0; i < elem.length; i++) {
            el = elem[ i ];
            if (Array.isArray(el.class)) {
              for (let j = 0; j < el.class.length; j++) {
                createElem(el.class[ j ], el);
              }
            } else {
              createElem(el.class, el);
            }
          }
        }

        if (!elem) return;
        else if (Array.isArray(elem)) eachElem();
        else createElem(elem.class, elem);

        return this;
      }

      addParam(param) {
        if (!param) return;
        this.param = param;
        return this;
      }
    }

    const animLP = new AnimLP();

    const createViewport = () => {
      const height = document.documentElement.clientHeight
        , top = pageYOffset
        , bottom = pageYOffset + height;

      return {
        height,
        top,
        bottom
      }
    };

    const checkElements = event => {
      const veiwport = createViewport()
        , elem = animLP.elem
        , param = animLP.param;
      let coord
        , offSetTop
        , offSetBottom;

      elem.forEach(el => {
        const elem = el.domElem;
        coord = elem.getBoundingClientRect();

        if (!elem.classList.contains('animlp') && event.type === 'load') {
          console.warn(`Warning: Need add class "animlp" to element - `, elem);
        }

        offSetTop = coord.top + veiwport.top;
        offSetBottom = coord.bottom + veiwport.top;

        if (offSetBottom > veiwport.top && offSetTop < veiwport.bottom) {
          createAnimation(el);
        } else if (!param.once) {
          elem.classList.add('animlp');
          el.isReady = true;
        }
      });
    };

    const checkProp = (param, name) => {
      if (typeof param !== 'number') {
        throw new Error(`Property "${name}" should be a number`);
      }
      return param;
    }

    const createAnimation = elem => {
      const animation = elem.animation
        , duration = checkProp(elem.duration, 'duration')
        , func = elem.func
        , delay = checkProp(elem.delay, 'delay')
        , el = elem.domElem
        , num = 1000;

      if (!elem.isReady) return;
      elem.isReady = false;

      const animText = `${animation} ${duration / num}s ${func} ${delay / num}s 1 normal forwards;`

      el.style.cssText = `
        -webkit-animation: ${animText}
        -moz-animation: ${animText}
        -ms-animation: ${animText}
        -o-animation: ${animText}
        animation: ${animText}`;

      setTimeout(() => {
        el.classList.remove('animlp');
        el.removeAttribute('style');
      }, duration + delay);
    }

    const init = prop => {
      if (!prop) return;
      animLP.addElem(prop.elements).addParam(prop.param);
    }

    window.addEventListener('load', checkElements);
    document.addEventListener('scroll', checkElements);

    init(property);

    return { init, animLP, checkElements, createViewport, createAnimation, property };

  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = animLP;
  else
    window.animLP = animLP;

})();