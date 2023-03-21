import SpecialCard from "./SpecialCard"
import { useSelector } from "react-redux"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapAll from "./MapAll";

function SpecialCardList() {
    const specials = useSelector((state) => state.specials);

    return (
        <>
        <a href="/specials/create">Submit New Special</a>
        <Container>
            <Row>
                {specials.map(special => {
                return <SpecialCard key={special.id} special={special}/>
                })}
            </Row>
        </Container>
        <MapAll specials={specials}/>
        </>
    )
}

export default SpecialCardList