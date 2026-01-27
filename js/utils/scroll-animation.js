$(function() {
  const $window = $(window);

  const checkAnimation = () => {
    const windowHeight = $window.height();
    const scrollTop = $window.scrollTop();
    const $animElements = $('[data-scroll-animate]');

    $animElements.each(function() {
      const $el = $(this);
      
      if ($el.hasClass('is-animated') || $el.data('animating')) return;

      const elementTop = $el.offset().top;
      const elementHeight = $el.outerHeight();
      const triggerPoint = scrollTop + windowHeight - 100;

      if (triggerPoint > elementTop && scrollTop < elementTop + elementHeight) {
        const delay = $el.data('scroll-delay') || 0;
        
        $el.data('animating', true);
        
        setTimeout(() => {
          $el.addClass('is-animated');
          $el.removeData('animating');
        }, delay);
      }
    });
  };

  $window.on('scroll', checkAnimation);
  checkAnimation();

  window.refreshScrollAnimations = checkAnimation;
});
