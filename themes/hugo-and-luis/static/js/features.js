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

  // Expandable notes functionality using event delegation
  document.querySelector('.notes-list').addEventListener('click', (e) => {
    const button = e.target.closest('.note-expand-btn');
    if (button) {
      e.preventDefault();
      const noteDescription = button.closest('.note-content').querySelector('.note-description');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      noteDescription.classList.toggle('expanded');
      button.setAttribute('aria-expanded', !isExpanded);
      button.querySelector('[aria-hidden]').textContent = isExpanded ? '▶' : '▼';
    }
  });

  // Close expanded notes when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.note-entry')) {
      document.querySelectorAll('.note-expand-btn[aria-expanded="true"]').forEach(button => {
        button.click();
      });
    }
  });
});