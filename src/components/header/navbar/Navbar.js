import Navbar_login from "./Navbar_login";
import Navbar_logo from "./Navbar_logo"
import './navbar_style.css'

const Navbar = ()=> {
    return (
        <div className="navbar">
            <Navbar_logo />
            <Navbar_login />
        </div>
    )
}


export default Navbar;


