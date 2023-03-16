import SpecialCard from "./SpecialCard"

function SpecialCardList({ specials }) {
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