import React from 'react'
import {Link} from 'react-router-dom'

const Navegacion = () => {
    return (
        <div>
        <nav className="nav-contenedor">
            <div className="dropdown">
                <button className="dropbtn">Personas</button>
                <div className="dropdown-content">
                    <Link to={"/nueva-persona"}>Nueva Persona</Link>
                    <Link to={"/listado-persona"}>Listado Personas</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Categorias</button>
                <div className="dropdown-content">
                    <Link to={"/nueva-categoria"}>Nueva Categoria</Link>
                    <Link to={"/listado-categoria"}>Listado Categoria</Link>
                </div>
            </div>
             <div className="dropdown">
                <button className="dropbtn">Libros</button>
                <div className="dropdown-content">
                    <Link to={"/nuevo-libro"}>Nuevo Libro</Link>
                    <Link to={"/listado-libro"}>Listado Libro</Link>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navegacion
