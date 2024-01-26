import React from 'react'
import { useSelector } from "react-redux";
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const activeForm = useSelector(state => state.createCampaign.activeForm);
    return (
        <>
            <Navbar activeForm={activeForm} />
            <div>{children}</div>
        </>
    )
}

export default Layout
