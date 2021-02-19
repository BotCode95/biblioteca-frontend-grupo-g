import React from 'react'
import {Link} from 'react-router-dom'

const Navegacion = () => {
    return (
        <nav className="nav-contenedor">
            <div className="dropdown">
                <button className="dropbtn">Personas</button>
                <div className="dropdown-content">
                    <a href="#!">Nueva Persona</a>
                    <a href="#!">Listado Personas</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Categoria</button>
                <div className="dropdown-content">
                    <Link to={"/nueva-categoria"}>Nueva Categoria</Link>
                    <Link to={"/listado-categoria"}>Listado Categoria</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Libro</button>
                <div className="dropdown-content">
                    <a href="#!">Nuevo Libro</a>
                    <a href="#!">Listado Libro</a>
                </div>
            </div>
        </nav>
    )
}

export default Navegacion
