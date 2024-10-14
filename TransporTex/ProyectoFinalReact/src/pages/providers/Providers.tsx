import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./providers.scss";
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
    field: "nombre_proveedor",
    type: "string",
    headerName: "Nombre",
    width: 200,
  },
  {
    field: "direccion_proveedor",
    type: "string",
    headerName: "Ubicacion",
    width: 150,
  },
  {
    field: "estado",
    type: "number",
    headerName: "Estado",
    width: 200,
  },
];

const Providers = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  const { isLoading, data } = useQuery({
    queryKey: ["allproviders"],
    queryFn: () =>
      fetch("http://localhost:8081/proveedor/todos").then((res) => res.json()),
  });

  return (
    <div className="providers">
      <div className="info">
        <h1>Providers</h1>
        <button onClick={() => setOpen(true)}>Add New Provider</button>
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
      {open && <Add slug="providers" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Providers;
