import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { 
    field: "ID", 
    type: "number",
    headerName: "ID", 
    width: 90 },
  {
    field: "nombre",
    type: "string",
    headerName: "Nombre",
    width: 150,
  },
  {
    field: "direccion",
    type: "string",
    headerName: "Direccion",
    width: 150,
  },
  {
    field: "telefono",
    type: "string",
    headerName: "Telefono",
    width: 200,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  const { isLoading, data, error } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8081/cliente/todos", {
        method: 'GET',
        credentials: 'include', // Incluye las credenciales si es necesario
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:admin123'), // Autenticación básica
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json();
      }),
  });

console.log(data)



  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
       {isLoading ? (
        "Loading..."
      ) : (
        <DataTable
  slug="cliente"
  columns={columns}
  getRowId={(row: any) => row.idCliente} // Aquí especificas que idCliente es el identificador único
  rows={data}
/>

   
        
      )} 
      {open && <Add slug="cliente" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
