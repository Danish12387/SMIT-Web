import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      // reset: true,
      distance: '80px',
      duration: 1500,
      delay: 150,
    });

    sr.reveal('.anim-left', { origin: 'left' });
    sr.reveal('.anim-bottom', { origin: 'bottom' });
    sr.reveal('.anim-top', { origin: 'top' });

  }, []);
};

export default useScrollReveal;
