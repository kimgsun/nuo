document.addEventListener('DOMContentLoaded', function() {
  const faqButtons = document.querySelectorAll('.faq__q');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest('.faq__item');
      const isActive = item.classList.contains('faq__item--active');
      
      if (isActive) {
        item.classList.remove('faq__item--active');
        this.setAttribute('aria-expanded', 'false');
      } else {
        document.querySelectorAll('.faq__item').forEach(i => {
          i.classList.remove('faq__item--active');
        });
        document.querySelectorAll('.faq__q').forEach(q => {
          q.setAttribute('aria-expanded', 'false');
        });
        
        item.classList.add('faq__item--active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
