const processSteps = document.querySelectorAll('.about-process__item');
if (processSteps.length) {
  const updateLineProgress = () => {
    processSteps.forEach((step, index) => {
      if (index === processSteps.length - 1) return;
      
      const stepRect = step.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (stepRect.top < viewportHeight && stepRect.bottom > 0) {
        const visibleHeight = Math.min(viewportHeight - stepRect.top, stepRect.height);
        const progress = Math.min(visibleHeight / stepRect.height, 1);
        step.style.setProperty('--line-progress', progress);
      } else {
        step.style.setProperty('--line-progress', stepRect.bottom <= 0 ? '1' : '0');
      }
    });
  };

  window.addEventListener('scroll', updateLineProgress);
  window.addEventListener('resize', updateLineProgress);
  updateLineProgress();
}
