const data = {
  elements: [
    {
      class: 'up-1',
      duration: 800,
      delay: 0,
      animation: 'bounceDown',
      func: 'ease'
    },
    {
      class: 'up-2',
      duration: 600,
      delay: 200,
      animation: 'bounceLeft',
      func: 'ease-out'
    },
    {
      class: 'up-3',
      duration: 600,
      delay: 400,
      animation: 'bounceRight',
      func: 'ease-out'
    },
    {
      class: 'btn',
      duration: 500,
      delay: 600,
      func: 'ease',
      animation: 'fadeUp',
    }
  ],
  param: {
    startAnim: 100,
    once: true
  }
};

animLP(data);