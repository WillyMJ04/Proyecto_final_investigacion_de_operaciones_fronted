const DATA = [{
    nombre: "Willy",
    apellido: "Rex",
    dpi: "1234",
    fecha: "Ayer",
    licencia: "A"
}, {
    nombre: "Oscar",
    apellido: "Pez",
    dpi: "21412412",
    fecha: "Hoy",
    licencia: "B"
}]
const table = document.getElementsByClassName("dataTable")[0];

const createRows = (nombreV, apellidoV, dpiV, fechaV, licenciaV) => {
    const dataParent = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = nombreV;
    const apellido = document.createElement("td");
    apellido.textContent = apellidoV;
    const dpi = document.createElement("td");
    dpi.textContent = dpiV;
    const fecha = document.createElement("td");
    fecha.textContent = fechaV;
    const licencia = document.createElement("td");
    licencia.textContent = licenciaV;
    dataParent.appendChild(name);
    dataParent.appendChild(apellido);
    dataParent.appendChild(dpi);
    dataParent.appendChild(fecha);
    dataParent.appendChild(licencia);
    return dataParent;
}

DATA.forEach(
    (item) => {
        const element = createRows(item.nombre, item.apellido, item.dpi, item.fecha, item.licencia);
        table.appendChild(element);
    }
)