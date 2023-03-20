import { useSelector } from "react-redux"
import Button from "react-bootstrap/esm/Button";

function Admin() {
    const specials = useSelector((state) => state.specials);
    console.log(specials)
    
    return (
        <>
        <Button>New Submissions</Button>
        <Button>Changes</Button>
        <Button>Delete Requests</Button>
        </>
    )
}

export default Admin