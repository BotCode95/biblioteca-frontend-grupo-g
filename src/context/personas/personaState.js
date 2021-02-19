import React, { useReducer } from 'react';
import personaContext from './personaContext';
import personaReducer from './personaReducer';
import clienteAxios from '../../config/axios';

const PersonaState = (props) => {
    const [state, dispatch] = useReducer(personaReducer, initialState)
    
    return ( 
        <personaContext.Provider
            value {{}} 
        >
            { props.children }
        </personaContext.Provider>
     );
}
 
export default PersonaState;





