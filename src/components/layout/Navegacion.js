import React from 'react'

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
                    <a href="#!">Nueva Categoria</a>
                    <a href="#!">Listado Categoria</a>
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
