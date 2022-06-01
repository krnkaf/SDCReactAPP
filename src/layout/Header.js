import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {

    const [menu,setMenu]=useState([
        {
            id:1,
            name:"About Us",
            url:"/aboutus"
        },{
            id:2,
            name:"Contact Us",
            url:"/contactus"
        },{
            id:3,
            name:"Post",
            url:"/post"
        }
    ]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">SDC React APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {menu.map(m=>(
                            <Link to={m.url} className="nav-item nav-link">{m.name}</Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;