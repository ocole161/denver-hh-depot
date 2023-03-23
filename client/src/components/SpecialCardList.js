import SpecialCard from "./SpecialCard"
import { useSelector } from "react-redux"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapAll from "./MapAll";
import CreateNewSpecial from "./CreateNewSpecial";

function SpecialCardList({neighborhoods, times}) {
    const specials = useSelector((state) => state.specials);

    return (
        <>
        <CreateNewSpecial neighborhoods={neighborhoods} times={times} />
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