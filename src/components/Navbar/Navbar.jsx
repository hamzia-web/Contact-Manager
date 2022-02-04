import React from "react"
import {Link} from "react-router-dom";

let Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                {/*<a href="/" className="navbar-brand">Contact Manager</a>*/}
                <Link to={'/'} className="navbar-brand">
                    <i className="fa fa-mobile text-warning"></i>Contact <span className="text-warning">Manager</span></Link>
               </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar