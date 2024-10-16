import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./drivers.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { 
    field: "id", 
    headerName: "ID", 
    width: 90 },
  {
    field: "nombre",
    type: "string",
    headerName: "Nombre",
    width: 200,
  },
  {
    field: "fecha_nacimiento",
    type: "string",
    headerName: "Fecha de Nacimiento",
    width: 150,
  },
  {
    field: "numero_documento",
    type: "number",
    headerName: "DPI",
    width: 200,
  },
  {
    field: "telefono",
    type: "number",
    headerName: "Telefono",
    width: 200,
  },
  {
    field: "direccion",
    type: "string",
    headerName: "Direccion",
    width: 200,
  },
  
  
];

const Drivers = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API
  const { isLoading, data, error } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8081/conductor", {
        method: "GET",
        credentials: "include", // Incluye las credenciales si es necesario
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("admin:admin123"), // Autenticación básica
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching data");
        }
        return res.json();
      }),
  });

  return (
    <div className="conductores">
      <div className="info">
        <h1>Conductores</h1>
        <button onClick={() => setOpen(true)}>Add New Driver</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable
          slug="conductores"
          columns={columns}
          getRowId={(row: any) => row.ID} // Aquí especificas que idCliente es el identificador único
          rows={data}
        />
      )}
      {open && <Add slug="conductores" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Drivers;