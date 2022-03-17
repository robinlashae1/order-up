import { NavLink } from "react-router-dom";
import Header from "./Header";

function NavBar() {
    return(
        <div id="headerNav">
        <Header/> 
        <div className="nLinks bootstrapOverride">
            <NavLink exact to='/' className="navBarLink float-child">Home</NavLink>
            <NavLink exact to='/about' className="navBarLink float-child">About</NavLink>
            <NavLink exact to='/menu' className="navBarLink float-child">Our Menus</NavLink>
            {/* <a href="https://www.doordash.com/store/main-street-pho-philadelphia-602116/" className="navBarLink float-child"> */}
            <a href="/onlineOrdering" className="navBarLink float-child">
                <button id="doorDashButton" >Order Online</button></a>
        </div>
        </div>
    )
}

export default NavBar;