import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // Estado para controlar los valores del formulario dinámico
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    // Inicializa los valores del formulario dinámicamente basado en las columnas recibidas
    const initialFormValues: { [key: string]: any } = {};
    props.columns
      .filter((column) => column.field !== "ID") // Filtrar el campo 'ID'
      .forEach((column) => {
        initialFormValues[column.field] = column.type === "boolean" ? false : "";
      });
    setFormValues(initialFormValues);
  }, [props.columns]);

  const queryClient = useQueryClient();

  // Mutación para enviar los datos
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`http://localhost:8081/${props.slug}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      return response.json(); // Si necesitas manejar la respuesta
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${props.slug}`] });
    },
    onError: (error: any) => {
      console.error("Error al agregar:", error);
    },
  });

  // Manejo del envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(); // Ejecuta la mutación
    props.setOpen(false); // Cierra el modal después del envío
  };

  // Manejo de los cambios en los inputs dinámicos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // Actualiza el estado dependiendo del tipo de input
    }));
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "ID" && item.field !== "img") // Evitar renderizar el campo 'ID'
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  name={column.field}
                  type={column.type === "boolean" ? "checkbox" : "text"}
                  placeholder={column.headerName}
                  value={formValues[column.field] || ""}
                  onChange={handleChange}
                  checked={column.type === "boolean" ? formValues[column.field] : undefined}
                />
              </div>
            ))}
          <button type="submit" disabled={mutation.status === "loading"}>
            {mutation.status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;

