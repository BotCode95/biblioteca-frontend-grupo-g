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
    })

    // if(categorias.length === 0) return <p>No hay categorias, podes crear una</p>
    return (
        <>
        <Layout/>
        <h1 className="text-titulo">Listado de Personas</h1>
        <div className="listado-container">
            <ul className="listado">
                {personas.map(persona => (
                    <Persona
                        persona = {persona}
                    />
                ))}
            </ul>
        </div>
        </>
        
    )
}

export default ListadoPersona
