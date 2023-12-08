import React from 'react'
import { Header, Footer } from '../components'


const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <div>{children}</div>
            <Footer />

        </main>
    )
}

export default Layout