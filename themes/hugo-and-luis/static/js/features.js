const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mainMenu.classList.toggle('active');
});

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.tooltip-trigger');
    if (trigger) {
      var content = trigger.nextElementSibling;
      content.classList.toggle('active');
    } else if (!e.target.closest('.tooltip-content')) {
      document.querySelectorAll('.tooltip-content.active').forEach(function(tooltip) {
        tooltip.classList.remove('active');
      });
    }
  });

  // Optional: Add this if you want to ensure hover works even on devices that don't support the hover media query
  if (!window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll('.tooltip-wrapper').forEach(function(wrapper) {
      wrapper.addEventListener('mouseenter', function() {
        this.querySelector('.tooltip-content').classList.add('active');
      });
      wrapper.addEventListener('mouseleave', function() {
        this.querySelector('.tooltip-content').classList.remove('active');
      });
    });
  }
});
</script>