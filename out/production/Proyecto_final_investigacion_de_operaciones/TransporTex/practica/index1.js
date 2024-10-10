document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('editForm').classList.toggle('hidden');
});

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Aquí puedes agregar la lógica para enviar los datos a la base de datos
    console.log('Datos enviados:', { name, email });

    // Ocultar el formulario después de enviar los datos
    document.getElementById('editForm').classList.add('hidden');
});