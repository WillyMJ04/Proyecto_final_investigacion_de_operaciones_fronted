import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  getRowId: (row: any) => any; 
};

const DataTable = (props: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`http://localhost:8081/${props.slug}/${id}`, {
        method: "DELETE",
      });
  
      // Si la respuesta no es OK, lanzamos un error
      if (!response.ok) {
        const errorMessage = await response.text();  // Para capturar el mensaje de error
        throw new Error(`Error al eliminar el cliente: ${errorMessage}`);
      }
  
      return response.json();  // Devuelve el cuerpo de la respuesta si es necesario
    },
    onSuccess: () => {
      // Invalida la cache para refrescar los datos tras la eliminación
      queryClient.invalidateQueries({ queryKey: [`all${props.slug}`] });
    },
    onError: (error: any) => {
      // Captura errores y muestra un mensaje
      console.error("Error eliminando el cliente:", error.message);
      alert(`Error eliminando el cliente: ${error.message}`);
    },
  });
  

  const handleDelete = (id: number) => {
    // Imprime el ID para verificar que sea el correcto
    console.log("Eliminando cliente con ID:", id);
    
    // Ejecuta la mutación para eliminar el cliente
    mutation.mutate(id);
  };
  

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.idCliente)}>


            <img src="/delete.svg" alt="none" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        getRowId={props.getRowId}  // Aquí permitimos pasar getRowId desde las props
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}; ,

export default DataTable;
