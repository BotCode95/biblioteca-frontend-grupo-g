import React, {useContext, useEffect} from 'react'
import Layout from '../layout/Layout'
import Persona from './Persona'
import personaContext from '../../context/personas/personaContext'


const ListadoPersona = () => {
    const personasContext = useContext(personaContext);
    const {persona,personas, obtenerPersonas} = personasContext;
    // parar el effect
    useEffect(() => {
        //no carga la primer edicion
        obtenerPersonas();
    },[persona])

    // if(categorias.length === 0) return <p>No hay categorias, podes crear una</p>
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
