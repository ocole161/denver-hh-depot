import { useSelector } from "react-redux"

function Admin() {
    const specials = useSelector((state) => state.specials);
    console.log(specials)
    
    return (
        <>admin</>
    )
}

export default Admin