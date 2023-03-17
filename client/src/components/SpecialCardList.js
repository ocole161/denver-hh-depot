import SpecialCard from "./SpecialCard"
import { useSelector } from "react-redux"

function SpecialCardList() {
    const specials = useSelector((state) => state.specials);
    
    return (
        <>
        <a href="/specials/create">Submit New Special</a>
        {specials.map(special => {
        return <SpecialCard key={special.id} special={special}/>
        })}
        </>
    )
}

export default SpecialCardList