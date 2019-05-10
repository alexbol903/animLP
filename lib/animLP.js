"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var animLP = function animLP(prop) {
    var property = prop;

    var AnimLP =
    /*#__PURE__*/
    function () {
      function AnimLP() {
        _classCallCheck(this, AnimLP);

        this._elem = [];
        this._param = {
          once: true
        };
      }

      _createClass(AnimLP, [{
        key: "clearElem",
        value: function clearElem() {
          this._elem = [];
          return this;
        }
      }, {
        key: "clearParam",
        value: function clearParam() {
          this._param = {
            startAnim: .1,
            once: true
          };
          return this;
        }
      }, {
        key: "addElem",
        value: function addElem(elem) {
          var _this = this;

          var el;

          var createElem = function createElem() {
            var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var elem = arguments.length > 1 ? arguments[1] : undefined;
            var domElem = document.querySelectorAll(".".concat(className));
            if (!domElem.length) throw new Error("Class \"".concat(className, "\" is not found"));

            for (var i = 0; i < domElem.length; i++) {
              var item = {
                domElem: domElem[i],
                duration: elem.duration || 500,
                delay: elem.delay || 0,
                animation: elem.animation || 'fadeUp',
                func: elem.func || 'ease',
                isReady: true
              };
              _this.elem = item;
            }
          };

          function eachElem() {
            for (var i = 0; i < elem.length; i++) {
              el = elem[i];

              if (Array.isArray(el["class"])) {
                for (var j = 0; j < el["class"].length; j++) {
                  createElem(el["class"][j], el);
                }
              } else {
                createElem(el["class"], el);
              }
            }
          }

          if (!elem) return;else if (Array.isArray(elem)) eachElem();else createElem(elem["class"], elem);
          return this;
        }
      }, {
        key: "addParam",
        value: function addParam(param) {
          if (!param) return;
          this.param = param;
          return this;
        }
      }, {
        key: "elem",
        get: function get() {
          return this._elem;
        },
        set: function set(value) {
          if (!value) return;

          this._elem.push(value);
        }
      }, {
        key: "param",
        get: function get() {
          return this._param;
        },
        set: function set(value) {
          if (!value) return;
          var param = this.param;

          for (var key in value) {
            if (param.hasOwnProperty(key)) {
              var _prop = value[key];
              this._param[key] = _prop;
            }
          }
        }
      }]);

      return AnimLP;
    }();

    var animLP = new AnimLP();

    var createViewport = function createViewport() {
      var height = document.documentElement.clientHeight,
          top = pageYOffset,
          bottom = pageYOffset + height;
      return {
        height: height,
        top: top,
        bottom: bottom
      };
    };

    var checkElements = function checkElements(event) {
      var veiwport = createViewport(),
          elem = animLP.elem,
          param = animLP.param;
      var coord, offSetTop, offSetBottom;
      elem.forEach(function (el) {
        var elem = el.domElem;
        coord = elem.getBoundingClientRect();

        if (!elem.classList.contains('animlp') && event.type === 'load') {
          console.warn("Warning: Need add class \"animlp\" to element - ", elem);
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

    var checkProp = function checkProp(param, name) {
      if (typeof param !== 'number') {
        throw new Error("Property \"".concat(name, "\" should be a number"));
      }

      return param;
    };

    var createAnimation = function createAnimation(elem) {
      var animation = elem.animation,
          duration = checkProp(elem.duration, 'duration'),
          func = elem.func,
          delay = checkProp(elem.delay, 'delay'),
          el = elem.domElem,
          num = 1000;
      if (!elem.isReady) return;
      elem.isReady = false;
      var animText = "".concat(animation, " ").concat(duration / num, "s ").concat(func, " ").concat(delay / num, "s 1 normal forwards;");
      el.style.cssText = "\n        -webkit-animation: ".concat(animText, "\n        -moz-animation: ").concat(animText, "\n        -ms-animation: ").concat(animText, "\n        -o-animation: ").concat(animText, "\n        animation: ").concat(animText);
      setTimeout(function () {
        el.classList.remove('animlp');
        el.removeAttribute('style');
      }, duration + delay);
    };

    var init = function init(prop) {
      if (!prop) return;
      animLP.addElem(prop.elements).addParam(prop.param);
    };

    window.addEventListener('load', checkElements);
    document.addEventListener('scroll', checkElements);
    init(property);
    return {
      init: init,
      animLP: animLP,
      checkElements: checkElements,
      createViewport: createViewport,
      createAnimation: createAnimation,
      property: property
    };
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = animLP;else window.animLP = animLP;
})();