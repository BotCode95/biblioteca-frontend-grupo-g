import React from 'react'
import Layout from './Layout'
import imagen from '../../public/static/img/chicaleyendo.svg'
const Inicio = () => {
    return (  
        <>
        <Layout/>
        <div className="container">
            <div className="columnaUno">
                <img src={imagen} alt="chicaleyendo" width="60%"/>
            </div>
            <div className="columnaDos">
                <h1 className="title">Where's my books?</h1>
            </div>
        </div>
        </>
    );
}
 
export default Inicio;