import { animate } from 'animejs';

animate('span', {
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
  ],
  rotate: {
    from: '-1turn',
    delay: 0,
  },
  delay: (_, i) => i * 50,
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true,
});

const img = document.getElementById('image1');

let animation = null;

img.addEventListener('click', (event) => {
  console.log('画像がクリックされました', event);

  if (animation) {
    animation.restart();
  } else {
    animation = animate(img, {
      scale: [1, 1.5],
      rotate: '1turn',
      duration: 800,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false,
    });
  }
});
