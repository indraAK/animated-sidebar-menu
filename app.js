document.addEventListener('DOMContentLoaded', () => {
   const toggleBtn = document.getElementById('toggle');
   const nav = document.getElementById('nav');

   toggleBtn.addEventListener('click', (e) => {
      const icon = toggleBtn.querySelector('.fas');
      nav.classList.toggle('show');

      if (nav.classList.contains('show')) {
         icon.classList.replace('fa-bars', 'fa-times');
      } else {
         icon.classList.replace('fa-times', 'fa-bars');
      }
   });
})