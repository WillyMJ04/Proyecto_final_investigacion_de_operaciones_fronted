// Función para solicitar los datos por consola
function solicitarDatos() {
    const producto = prompt("Ingresa el nombre del producto:");
    const cantidad = prompt("Ingresa la cantidad del producto:");
    const precioUnitario = prompt("Ingresa el precio unitario del producto (ej. 10.00):");
    const tiempoEstimado = prompt("Ingresa el tiempo estimado de entrega (ej. 40:39):");
    const precioEnvio = prompt("Ingresa el precio del servicio de envío (ej. 10.00):");

    // Guardar los datos en localStorage para la siguiente visita
    localStorage.setItem('producto', producto);
    localStorage.setItem('cantidad', cantidad);
    localStorage.setItem('precioUnitario', precioUnitario);
    localStorage.setItem('tiempoEstimado', tiempoEstimado);
    localStorage.setItem('precioEnvio', precioEnvio);

    return {
        producto,
        cantidad: parseInt(cantidad),  // Convertir a número
        precioUnitario: parseFloat(precioUnitario),  // Convertir a número
        tiempoEstimado,
        precioEnvio: parseFloat(precioEnvio),  // Convertir a número
    };
}

// Función para actualizar los campos de la vista con los datos ingresados
function actualizarDetalleCompra(datos) {
    document.getElementById('nombre-producto').textContent = datos.producto;
    document.getElementById('cantidad-producto').textContent = datos.cantidad;
    document.getElementById('precio-unitario').textContent =  datos.precioUnitario.toFixed(2);
    document.getElementById('tiempo-estimado').textContent = datos.tiempoEstimado;

    // Calcular el total de productos multiplicando cantidad por precio unitario
    const totalProductos = datos.cantidad * datos.precioUnitario;
    document.getElementById('precio-productos').textContent = totalProductos.toFixed(2);

    // Mostrar el precio de envío
    document.getElementById('precio-envio').textContent =  datos.precioEnvio.toFixed(2);

    // Calcular el total a pagar (productos + envío)
    const totalPagar = totalProductos + datos.precioEnvio;
    document.getElementById('total-pagar').textContent = 'Q ' + totalPagar.toFixed(2);
}

// Función para solicitar y actualizar datos después de la carga de la página
function manejarDatos() {
    setTimeout(function() {
        let datos = solicitarDatos(); // Solicita los datos por consola
        actualizarDetalleCompra(datos); // Actualiza la vista con los datos ingresados
    }, 500); // 500ms de espera antes de pedir los datos para asegurar que la vista ya se haya renderizado
}

// Cargar la página completamente primero y luego solicitar los datos
window.onload = function() {
    // Cargar los datos de localStorage
    let datosGuardados = {
        producto: localStorage.getItem('producto') || 'Nombre del producto',
        cantidad: parseInt(localStorage.getItem('cantidad')) || 0,
        precioUnitario: parseFloat(localStorage.getItem('precioUnitario')) || 0.00,
        tiempoEstimado: localStorage.getItem('tiempoEstimado') || '00:00',
        precioEnvio: parseFloat(localStorage.getItem('precioEnvio')) || 0.00,
    };
    actualizarDetalleCompra(datosGuardados);

    // Luego de que la página esté lista, pedir los datos
    manejarDatos();
};
