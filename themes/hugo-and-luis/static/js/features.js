document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.querySelector('.main-menu');
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  // Menu toggle functionality
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });

  // Tooltip functionality
  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('.tooltip-trigger');
    if (trigger && isTouch) {
      e.preventDefault();
      const content = trigger.nextElementSibling;
      content.classList.toggle('active');
    } else if (!e.target.closest('.tooltip-content')) {
      document.querySelectorAll('.tooltip-content.active').forEach(tooltip => tooltip.classList.remove('active'));
    }
  });

  // Fallback for non-touch devices that don't support hover media query
  if (!isTouch) {
    document.querySelectorAll('.tooltip-wrapper').forEach(wrapper => {
      wrapper.addEventListener('mouseenter', () => wrapper.querySelector('.tooltip-content').classList.add('active'));
      wrapper.addEventListener('mouseleave', () => wrapper.querySelector('.tooltip-content').classList.remove('active'));
    });
  }
});