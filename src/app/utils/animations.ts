import gsap from 'gsap';
export const animatePageIn = () => {
  const letters = document.getElementsByClassName('char');
  const wish = document.getElementById('wish');
  const cake = document.getElementById('cake');

  if (letters) {
    const tl = gsap.timeline();
    tl.fromTo(
      cake,
      {
        scale: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    )
      .fromTo(
        letters,
        {
          scale: 0,
          y: 50,
        },
        {
          scale: 1,
          y: 0,
          ease: 'back.out(1.7)',
          stagger: 0.1,
        }
      )
      .fromTo(
        wish,
        {
          scale: 0,
        },
        {
          scale: 1,
          ease: 'back.out(1.7)',
        }
      );
  }
};
