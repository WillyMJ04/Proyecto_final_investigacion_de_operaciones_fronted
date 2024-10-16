import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { productRows } from "../../data";
import { useQuery } from "@tanstack/react-query";
import Product from "../product/Product";

const columns: GridColDef[] = [
  { field: "ID", type: "number", headerName: "ID", width: 90 },
  {
    field: "nombre_producto",
    headerName: "Nombre Producto",
    width: 100,
  },
  {
    field: "tipoProducto",
    type: "string",
    headerName: "Tipo Producto",
    width: 250,
  },

  {
    field: "pesoProducto",
    type: "number",
    headerName: "Peso Producto",
    width: 150,
  },

  {
    field: "estado",
    headerName: "Estado",
    type: "number",
    width: 150,
  },

  /*  {
    field: "action",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <div className="view">View</div>
          <div className="delete">Delete</div>
        </div>
      );
    },
  },
*/
  /* 
Use  this function to any kind of union of two different data or even to summarize the results
{
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },*/
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  const { isLoading, data, error } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:8081/producto", {
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
    <div className="products">
      <div className="info">
        <h1>Producto</h1>
        <button onClick={() => setOpen(true)}>Agregar nuevo producto</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable
          slug="producto"
          columns={columns}
          getRowId={(row: any) => row.idProducto} // Aquí especificas que idCliente es el identificador único
          rows={data}
        />
      )}
      {open && <Add slug="producto" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
