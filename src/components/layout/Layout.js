import React from 'react'
import Navegacion from './Navegacion'

const Layout = () => {
    return (
        <div className="container-layout">
            <div className="container-title">
                <h1 className="layout-text">My books</h1>
            </div>
            <Navegacion/>
        </div>
    )
}

export default Layout
