import react from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import {Button} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Nav>
                <Bars />
                <NavMenu>
                    <Link to='/'>
                    <Button style={{
                        width: '80px',
                        height: '80px',
                        margin: '10px',
                    }}>Logo</Button>
                    </Link>
                    <h1 style={{
                        width: '150px',
                    }}>Navbar</h1>
                    <NavLink to="/">Page 1</NavLink>
                    <NavLink to="/buy">Page 2</NavLink>
                    <NavLink to="/sell">Page 3</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    );
}

export default Navbar;