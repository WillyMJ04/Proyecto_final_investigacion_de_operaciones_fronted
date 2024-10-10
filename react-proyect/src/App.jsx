import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { authStore } from "./store/authStore";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./services/jsonService";

const App = () => {
  const [count, setCounter] = useState(0);
  const { authState, setAuth, setUsers, users } = authStore();

  const {data, isPending, error} = useQuery({
    queryKey: ["users"],
    queryFn : getUsers,
  })

  useEffect(()=>{
    setUsers(data)
  }, [data])

  return (
    <>
      <div className="content pr-96 mr-96">
        {/* <Navbar /> */}
        <h1>Bienvenido a la sección de Trabajos {count}</h1>
        <p>
          Selecciona una categoría en la barra de navegación para ver más
          detalles.
        </p>
        <p>{JSON.stringify({authState, users})}</p>
        <button
          onClick={() => {
            setAuth({
              isLoggedIn: true,
              token: 123,
              userId: 3,
            });
          }}
        >
          Cambiar estado global
        </button>
        <button
          onClick={() => {
            setCounter(prev => prev + 1)
          }}
        >
          Cambiar estado local
        </button>
      </div>

      <Hero />
      <div className="transportexdashboard-parent">
        <div className="transportexdashboard">
          <div className="mid-section">
            <div className="card-5">
              <div className="total-de-pedidos">Total de Pedidos </div>

              <b className="b">5852</b>
              {/* <img className="more-icon" alt="" src="../../imgs/AdminView/more.svg"> */}
            </div>
            <div className="card-6">
              <div className="total-de-pedidos">Total de trabajadores</div>

              <b className="b">3145</b>
              {/* <img className="more-icon" alt="" src="../../imgs/AdminView/more.svg"> */}
            </div>
            <div className="card-7">
              <div className="total-de-pedidos">Cancelaciones</div>

              <b className="b">1035</b>
              {/* <img className="more-icon" alt="" src="../../imgs/AdminView/more.svg"> */}
            </div>

            <div className="search-area">
              <div className="search-area-child"></div>
              <div className="search-area-item"></div>
              {/* <img className="search-icon" alt="" src="../../imgs/AdminView/search icon.svg"> */}

              <div className="search">Search</div>
            </div>
            <div className="card-2">
              <div className="card-2-child"></div>
              <div className="detalles">Detalles </div>
              <div className="month">Month</div>
              <div className="total-de-pedidos1">Total de Pedidos</div>
              <div className="total-de-trabajadores">Total de Trabajadores</div>
              <div className="cancelaciones1">Cancelaciones</div>
              <div className="en-proceso">En proceso </div>
              <div className="completados">Completados</div>
              <div className="card-2-item"></div>
              <div className="card-2-inner"></div>
              <div className="line-div"></div>
              <div className="card-2-child1"></div>
              {/* <img className="chevron-sort-down-icon" alt="" src="../../imgs/AdminView/chevron-sort-down.svg"> */}
            </div>
            {/* <img className="motociclista" alt="" src="../../imgs/AdminView/motociclista.png"> */}

            <div className="card-8">
              <h1 className="detalles-empleados">Detalles empleados</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DPI</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Número de Licencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juan</td>
                    <td>Pérez</td>
                    <td>1234567890123</td>
                    <td>10 de enero de 1985</td>
                    <td>LIC-12345</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
