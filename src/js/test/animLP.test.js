const bodyText = require('./page'),
  animLP = require('../animLP');

describe('#: animLP works with unit tests', () => {
  
  beforeEach(async () => {
    document.body.innerHTML = await bodyText;
  });
  
  afterEach(async () => {
    document.body.innerHTML = await '';
    await animLP().animLP.clearElem().clearParam();
  });

  it('no added paramaters to `init`', () => {
    animLP();
    expect(animLP().init()).toBeUndefined();
  });

  it('main function is definde', () => {
    animLP();
    expect(animLP().animLP).toBeDefined();
    expect(animLP().animLP.param).toBeDefined();
    expect(animLP().animLP.elem).toBeDefined();
  });

  it('default parameters is correct', () => {
    const data = { elements: { class: 'up-1' } }
    const animlp = animLP(data).animLP;
    expect(animlp.param.startAnim).toBe(.1);
    expect(animlp.param.once).toBeTruthy();
    expect(animlp.elem).toHaveLength(2);
    expect(animlp.elem[ 0 ].duration).toBe(500);
    expect(animlp.elem[ 0 ].delay).toBe(0);
    expect(animlp.elem[ 0 ].animation).toBe('fadeUp');
    expect(animlp.elem[ 0 ].func).toBe('ease');
    expect(animlp.elem[ 0 ].isReady).toBeTruthy();
  });
  
  it('the parameters added to `init` are correct', () => {
    const data = {
      elements: {
        class: 'btn',
        duration: 600,
        delay: 400,
        animation: 'fadeRight',
        func: 'ease-out'
      },
      param: {
        startAnim: 200,
        once: false
      }
    }
    const animlp = animLP(data).animLP;
    expect(animlp.param.startAnim).toBe(2);
    expect(animlp.param.once).toBeFalsy();
    expect(animlp.elem).toHaveLength(2);
    expect(animlp.elem[ 0 ].duration).toBe(600);
    expect(animlp.elem[ 0 ].delay).toBe(400);
    expect(animlp.elem[ 0 ].animation).toBe('fadeRight');
    expect(animlp.elem[ 0 ].func).toBe('ease-out');
  });

  it(`throw error when don't have a class name`, () => {
    const data = {
      elements: {
        duration: 600,
        delay: 400,
        animation: 'fadeRight',
        func: 'ease-out'
      }
    }
    expect(() => {
      animLP(data)
    }).toThrow();
  });

  it('throw error if the property duration is string', () => {
    const data = {
      elements: {
        class: 'up-1',
        duration: '600',
        delay: 400,
        animation: 'fadeRight',
        func: 'ease-out'
      }
    }
    expect(() => {
      animLP(data).createAnimation(data.elements);
    }).toThrow();
  });

});

