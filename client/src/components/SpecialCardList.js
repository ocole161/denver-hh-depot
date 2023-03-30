import { useState } from "react";
import { useSelector } from "react-redux"
import SpecialCard from "./SpecialCard"
import MapAll from "./MapAll";
import CreateNewSpecial from "./CreateNewSpecial";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/esm/Button";

function SpecialCardList({neighborhoods, times}) {
    const specials = useSelector((state) => state.specials);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState("All");
    const specialsToShow = specials.filter(special => special.location_neighborhood === selectedNeighborhood || selectedNeighborhood === "All");

    const [showMap, setShowMap] = useState(false);

    return (
        <>
        <Button onClick={() => setSelectedNeighborhood("All")}>All</Button>
        {neighborhoods.map(neighborhood => {
            return <Button key={neighborhood} onClick={() => setSelectedNeighborhood(neighborhood)}>{neighborhood}</Button>})}
        <br></br>
        <br></br>
        <CreateNewSpecial neighborhoods={neighborhoods} times={times} />
        <Button onClick={() => setShowMap(!showMap)}>{showMap ? "Show List" : "Specials Near Me"}</Button>
        {showMap ? 
            <MapAll specials={specialsToShow}/> :
            <Container>
                <Row>
                    {specialsToShow.map(special => {
                    return <SpecialCard key={special.id} special={special}/>
                    })}
                </Row>
            </Container>
        }
        </>
    )
}

export default SpecialCardList