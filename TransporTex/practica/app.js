$(document).ready(function() {
    // Función para actualizar los datos
    function updateData(id, nombre, apellido, dpi, fecha, licencia) {
        $.ajax({
            url: '/update',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ id, nombre, apellido, dpi, fecha, licencia }),
            success: function(response) {
                if (response.success) {
                    alert('Datos actualizados correctamente');
                    // Aquí puedes actualizar la tabla con los nuevos datos
                } else {
                    alert('Error al actualizar los datos');
                }
            }
        });
    }

    // Ejemplo de cómo llamar a la función updateData
    $('#dataTable').on('click', '.update-btn', function() {
        const row = $(this).closest('tr');
        const id = row.data('id');
        const nombre = row.find('.nombre').text();
        const apellido = row.find('.apellido').text();
        const dpi = row.find('.dpi').text();
        const fecha = row.find('.fecha').text();
        const licencia = row.find('.licencia').text();

        updateData(id, nombre, apellido, dpi, fecha, licencia);
    });
});