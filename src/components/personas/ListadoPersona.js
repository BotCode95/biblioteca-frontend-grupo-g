import React, {useContext, useEffect} from 'react'
import Layout from '../layout/Layout'
import Persona from './Persona'
import personaContext from '../../context/personas/personaContext'
import libroContext from '../../context/libros/libroContext'

const ListadoPersona = () => {
    const personasContext = useContext(personaContext);
    const {persona,personas, obtenerPersonas} = personasContext;

    const librosContext = useContext(libroContext)
    const { obtenerLibros } = librosContext;
    
    useEffect(() => {
        obtenerPersonas();
        obtenerLibros();
    },[persona])

    return (
        <>
        <Layout/>
        <div className="text-titulo">
            <h1>Listado de Personas</h1>
        </div>
            <table className="tabla-persona">
                <thead >
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Alias</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        <th>Libros</th>
                    </tr>
                </thead>
                    {personas.map(persona => (
                        <Persona
                            key = {persona.id}
                            persona = {persona}
                        />
                    ))}
            </table>
        </>
    )
}

export default ListadoPersona
