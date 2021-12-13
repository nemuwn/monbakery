import logo from "../../../img/logo.png";
import "./navbar_style.css"

const Navbar_logo = ()=> {
    return (
        <div className="navbar_logo">
            <a><img src={logo} /></a>
        </div>
    )
}

export default Navbar_logo;