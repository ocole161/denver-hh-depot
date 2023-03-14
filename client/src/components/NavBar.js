import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/userSlice";

function NavBar() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    console.log(user)

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
        <nav>
            <a href="/">Home</a><> </>
            {user.user_type === "visitor" ? <><a href="/login">Login</a><> </>
            <a href="/signup">Signup</a><></> </>:
            <button onClick={handleLogout}>Logout</button>}
            <p>Current User: {user.username}</p>
        </nav>
    )
}

export default NavBar