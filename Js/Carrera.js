document.addEventListener("DOMContentLoaded", function() {
  const imagenes = document.querySelectorAll('.LogoDeCarrera');
  const infoCarreras = document.querySelectorAll('.infoCarrera');

  imagenes.forEach((imagen, index) => {
      imagen.addEventListener('mouseenter', () => {
          imagen.classList.add('rotar');
          infoCarreras[index].classList.remove('oculto');
      });

      imagen.addEventListener('mouseleave', () => {
          imagen.classList.remove('rotar');
          infoCarreras[index].classList.add('oculto');
      });
  });
});

