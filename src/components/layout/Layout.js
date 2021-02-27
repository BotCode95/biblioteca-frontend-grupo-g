import React from 'react'
import {Link} from 'react-router-dom'
import Navegacion from './Navegacion'

const Layout = () => {
    return (
        <div className="container-layout">
                <Link to={'/'}>
                    <h1 className="layout-text">My books</h1>
                </Link>
            <Navegacion/>
        </div>
    )
}

export default Layout
