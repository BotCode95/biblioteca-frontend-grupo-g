import React, {useContext, useEffect} from 'react'
import Layout from '../layout/Layout'
import Persona from './Persona'
import personaContext from '../../context/personas/personaContext'


const ListadoPersona = () => {
    const personasContext = useContext(personaContext);
    const {personas, obtenerPersonas} = personasContext;
    // parar el effect
    useEffect(() => {
        obtenerPersonas();
    },[])

    // if(categorias.length === 0) return <p>No hay categorias, podes crear una</p>
    return (
        <>
        <Layout/>
        <h1 className="text-titulo">Listado de Personas</h1>
        <div className="listado-container">
           
            <table>
                <thead className="tabla-persona">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Alias</th>
                            <th>Email</th>
                        </tr>
                </thead>
                    {personas.map(persona => (
                        <Persona
                            key = {persona.id}
                            persona = {persona}
                        />
                    ))}
            </table>
        </div>
        </>
        
    )
}

export default ListadoPersona
