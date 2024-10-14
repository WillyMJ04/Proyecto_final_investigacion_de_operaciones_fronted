import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { productRows } from "../../data";
import { useQuery } from "@tanstack/react-query";
import Product from "../product/Product";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90,editable: true },
  { field: "img", headerName: "imagen", width: 90 },
  { field: "title", headerName: "titulo", width: 90 },
  { field: "producer", headerName: "producer", width: 90 },
  { field: "price", headerName: "price", width: 90 },
  { field: "createAt", headerName: "createAt", width: 90 },
  // { field: "id_producto",
  //   headerName: "ID",
  //   width: 90 },
  // {
  //   field: "nombre_producto",
  //   headerName: "Nombre Producto",
  //   width: 100,
  //   renderCell: (params) => {
  //     return <img src={params.row.img} alt="" />;
  //   },
  // },
  // {
  //   field: "tipo_producto",
  //   type: "string",
  //   headerName: "Tipo Producto",
  //   width: 250,
  // },

  // {
  //   field: "peso_producto",
  //   type: "number",
  //   headerName: "Peso Producto",
  //   width: 150,
  // },

  // {
  //   field: "estado",
  //   headerName: "Estado",
  //   type: "number",
  //   width: 150,
  // },
  // {
  //   field: "usuario_creo",
  //   headerName: "Usuario Creador",
  //   type: "string",
  //   width: 200,
  // },
  // {
  //   field: "fecha_creo",
  //   headerName: "Fecha Creacion",
  //   type: "string",
  //   width: 200,
  // },
  // {
  //   field: "usuario_modifico",
  //   headerName: "Usuario Modifico",
  //   type: "string",
  //   width: 150,
  // },
  // {
  //   field: "fecha_modifico",
  //   headerName: "Fecha Modifico",
  //   type: "string",
  //   width: 200,
  // },
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

  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:8081/productos").then((res) => res.json()),
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
          slug="products"
          columns={columns}
          rowID={(row: any) => row?.idProductos}
          rows={productRows}
        />
      )}
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
