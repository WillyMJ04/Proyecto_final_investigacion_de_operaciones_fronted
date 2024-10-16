import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./orders.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  {
    field: "ID",
    headerName: "ID",
    width: 90,
  },
  {
    field: "pedido_id",
    type: "number",
    headerName: "Pedido ID",
    width: 150,
  },
  {
    field: "descripcion",
    type: "string",
    headerName: "Descripcion",
    width: 150,
  },
  {
    field: "precio",
    type: "number",
    headerName: "Precio",
    width: 200,
  },
  {
    field: "cantidad",
    type: "number",
    headerName: "Cantidad",
    width: 200,
  },
  {
    field: "peso",
    type: "number",
    headerName: "Peso",
    width: 200,
  },
  {
    field: "volumen",
    type: "number",
    headerName: "Volumen",
    width: 200,
  },
  {
    field: "ubicacion",
    type: "string",
    headerName: "ubicacion",
    width: 200,
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  const { isLoading, data, error } = useQuery({
    queryKey: ["allorders"],
    queryFn: () =>
      fetch("http://localhost:8081/ordenes/todos", {
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
    <div className="orders">
      <div className="info">
        <h1>Ordenes</h1>
        <button onClick={() => setOpen(true)}>Agregar Nueva Orden</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable
          slug="cliente"
          columns={columns}
          getRowId={(row: any) => row.ID} // Aquí especificas que idCliente es el identificador único
          rows={data}
        />
      )}
      {open && <Add slug="orders" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders;
