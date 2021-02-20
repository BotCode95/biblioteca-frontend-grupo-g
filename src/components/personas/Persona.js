import React, {useContext} from 'react';
import personaContext from '../../context/personas/personaContext';

const Persona = ({persona}) => {

    const personasContext = useContext(personaContext)
    const {personaActual} = personasContext;

    const seleccionarPersona = id => {
        personaActual(id);
    }

    return (
        <li className="item">
            <button
                type="button"
                className="boton-categoria"
                onClick={() => seleccionarPersona(persona.id)}
            >
                {persona.nombre}
            </button>
            <div className="item-container">
                <button  className="item-botonera-editar">Editar</button>
                <button  className="item-botonera-eliminar">Eliminar</button>
            </div>
        </li>
    )
}

export default Persona