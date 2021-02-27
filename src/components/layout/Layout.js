import React from 'react'
import {Link} from 'react-router-dom'
import Navegacion from './Navegacion'

const Layout = () => {
    return (
        <div className="container-layout">
            <h1><Link to={'/'}  className="layout-text">
                My books</Link></h1>
            <Navegacion/>
        </div>
    )
}

export default Layout
