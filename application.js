    const steps = document.querySelectorAll('.step');
    const sections = document.querySelectorAll('.form-section');
    const nextButtons = document.querySelectorAll('.next-button');

    function showStep(stepNumber) {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index + 1 === stepNumber);
      });

      sections.forEach((section, index) => {
        section.classList.toggle('hidden', index + 1 !== stepNumber);
      });
    }

    steps.forEach(step => {
      step.addEventListener('click', () => {
        const stepNumber = parseInt(step.getAttribute('data-step'));
        showStep(stepNumber);
      });
    });

    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        const nextStep = parseInt(button.getAttribute('data-next'));
        showStep(nextStep);
      });
    });

    // Initialize
    showStep(1);
    const prevButtons = document.querySelectorAll('.prev-button');

prevButtons.forEach(button => {
  button.addEventListener('click', () => {
    const prevStep = parseInt(button.getAttribute('data-prev'));
    showStep(prevStep);
  });
});
