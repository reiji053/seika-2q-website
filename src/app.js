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
img.style.transformOrigin = 'top center';

img.addEventListener('click', () => {
  console.log('画像1がクリックされました');

  animate(img, {
    scale: [1, 1.5, 1],
    rotate: [0, '1turn', 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    loop: false,
  });
});

const img2 = document.getElementById('image2');

img2.addEventListener('click', () => {
  console.log('画像2がクリックされました');

  const randomRotateDeg = `${Math.floor(Math.random() * 360) - 180}deg`;

  animate(img2, {
    keyframes: [
      {
        translateY: -150,
        scale: 1.5,
        rotate: randomRotateDeg,
        duration: 650,
        easing: 'easeInOutQuad',
      },
      {
        translateY: -150,
        scale: 1.5,
        rotate: randomRotateDeg,
        duration: 500,
        easing: 'linear',
      },
      {
        translateY: 0,
        scale: 1,
        rotate: 0,
        duration: 650,
        easing: 'easeInOutQuad',
      },
    ],
  });
});

animate('.bg', {
  backgroundColor: [
    'rgba(230, 230, 250, 0.4)',
    'rgba(179, 217, 255, 0.4)',
    'rgba(195, 230, 203, 0.4)',
    'rgba(255, 245, 204, 0.4)',
    'rgba(255, 218, 185, 0.4)',
    'rgba(230, 230, 250, 0.4)',
  ],
  duration: 10000,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
});
