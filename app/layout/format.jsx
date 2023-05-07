import Footer from "../component/Footer"
import Header from "../component/Header"

import Head from "next/head"


const Format = ({children}) => {
    return (<>


        <Header />
        
        <main>{children}</main>
       
        <Footer />

    </>


    )
}

export default Format