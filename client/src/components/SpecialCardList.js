import SpecialCard from "./SpecialCard"

function SpecialCardList({ specials }) {
    return (
        <>
        {specials.map(special => {
        return <SpecialCard key={special.id} special={special}/>
        })}
        </>
    )
}

export default SpecialCardList