import { useDispatch, useSelector } from "react-redux"
import SignUp from "./SignUp";
import Login from './Login'
import { logout } from "../features/userSlice";
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo_happy_hour from "../assets/logo_happy_hour.png";

function NavBar() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        fetch('/logout',{
            method: 'DELETE',
        })
        .then(res => {
            if(res.ok){
                dispatch(logout())
            }
        })
    }

    return(
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand className="navbar-title" href="/">
                <img 
                    alt="logo"
                    src={logo_happy_hour}
                    width="150"
                    height="120"
                    className="d-inline-block align-top"
                />{' '}
                Denver Happy Hour Depot
            </Navbar.Brand>
            </Container>
            {user.user_type === "admin" ? <Button className="standard-button" href="/admin">Admin</Button> : null} <></>
            {user.user_type === "visitor" ? <><Login />
                <SignUp /> </>:
                <Button className="standard-button" onClick={handleLogout}>Logout</Button>}
        </Navbar>
    )
}

export default NavBar