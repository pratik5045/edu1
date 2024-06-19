document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.divi1 img');

    image.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });