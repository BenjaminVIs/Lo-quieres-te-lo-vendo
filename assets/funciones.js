/**
 * Valida los campos del formulario de contacto y muestra alertas si hay campos vacíos.
 * Este script debe enlazarse en el HTML antes de la etiqueta </body>:
 * <script src="assets/funciones.js"></script>
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        // Lista de campos a validar
        const campos = [
            { id: 'nombre', nombre: 'Nombre completo' },
            { id: 'email', nombre: 'Correo electrónico' },
            { id: 'telefono', nombre: 'Teléfono' },
            { id: 'mensaje', nombre: 'Mensaje' }
        ];

        let camposVacios = [];

        campos.forEach(campo => {
            const input = document.getElementById(campo.id);
            if (!input || !input.value.trim()) {
                camposVacios.push(campo.nombre);
                input && input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (camposVacios.length > 0) {
            e.preventDefault();
            alert('Por favor completa los siguientes campos:\n- ' + camposVacios.join('\n- '));
        }
    });
});