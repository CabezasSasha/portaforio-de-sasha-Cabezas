document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#formularioComentario');
    const respuesta = document.querySelector('#respuesta');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto
        
        // Obtener los valores de los campos del formulario
        const nombreApellido = document.getElementById('nombreapellido').value.trim();
        const correoElectronico = document.getElementById('correoelectronico').value.trim();
        const pais = document.getElementById('pais').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar los campos
        if (!nombreApellido || !correoElectronico || !pais || !asunto || !mensaje) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (!validateName(nombreApellido)) {
            alert('Por favor, ingrese un nombre y apellido válido (solo letras).');
            return;
        }

        if (!validateName(pais)) {
            alert('Por favor, ingrese un país válido (solo letras).');
            return;
        }
        
        if (!validateEmail(correoElectronico)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }
        
        // Preparar los datos del formulario
        const formData = new FormData(form);

        // Enviar el formulario de manera asíncrona usando fetch
        fetch('https://formspree.io/f/mdobaybw', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                respuesta.textContent = '¡Mensaje enviado con éxito!';
                respuesta.style.color = 'green';
                form.reset();
            } else {
                respuesta.textContent = 'Hubo un error al enviar el mensaje.';
                respuesta.style.color = 'red';
            }
        }).catch(error => {
            respuesta.textContent = 'Hubo un error al enviar el mensaje.';
            respuesta.style.color = 'red';
        });
    });
    
    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Función para validar que el nombre solo contenga letras
    function validateName(name) {
        const re = /^[a-zA-Z\s]+$/;
        return re.test(String(name));
    }
});
