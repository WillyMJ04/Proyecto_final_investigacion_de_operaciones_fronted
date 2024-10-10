var boton = document.getElementById('agregar');
var guardar = document.getElementById('guardar');
var lista = document.getElementById('lista');
var data = [];
var cant = 0;
boton.addEventListener("click", agregar);
guardar.addEventListener("click", save);

function agregar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dpi = parseInt(document.getElementById('dpi').value);
    var fecha = document.getElementById('fecha').value;
    var licencia = parseInt(document.getElementById('licencia').value);
    //agregar elemento
    data.push({
        "id": cant,
        "nombre": nombre,
        "apellido": apellido,
        "dpi": dpi,
        "fecha": fecha,
        "licencia": licencia

    })

    var id_row = 'row' + cant;
    var fila = '<tr id=' + id_row + '><td>' + nombre + '</td><td>' + apellido + '</td><td>' + dpi + '</td><td>' + fecha + '</td><td>' + licencia + '</td><td><a href="#" class="btn btn-danger" onclick="eliminar(' + cant + ')";>Eliminar</a><a href="#" class="btn btn-warning" onclick="cantidad(' + cant + ')";>Cantidad</td></tr>';
    //agregar
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#apellido").val('');
    $("#dpi").val('');
    $("#fecha").val('');
    $("#licencia").val('');
    $("#nombre").focus();
    cant++;
    sumar();
}

function save() {

}


function eliminar(row) {
    //remover fila de la tabla
    $("#row" + row).remove();
    var i = 0;
    var pos = 0;
    for (x of data) {
        if (x.id == row) {
            pos = i;
        }
        i++;
    }
    data.splice(pos, 1);
    sumar();
};

function cantidad(row) {
    var canti = parseFloat(prompt("Nueva cantidad"));
    data[row.cantidad = canti];
    data[row].total = data[row].cantidad * data[row].precio;
    var filaid = document.getElementById("row" + row);
    celda = filaid.getElementsByTagName('td');
}

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