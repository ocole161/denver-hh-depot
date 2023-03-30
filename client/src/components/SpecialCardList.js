import { useState } from "react";
import { useSelector } from "react-redux"
import SpecialCard from "./SpecialCard"
import MapAll from "./MapAll";
import CreateNewSpecial from "./CreateNewSpecial";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/esm/Button";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SpecialCardList({neighborhoods, times}) {
    const specials = useSelector((state) => state.specials);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState("All");

    const [showMap, setShowMap] = useState(false);

    const [selectedType, setSelectedType] = useState("All");
    function typeFilter(list) {
        switch(selectedType) {
            case "All": return list;
            case "Beer": return list.filter(special => special.beer);
            case "Wine": return list.filter(special => special.wine);
            case "Cocktails": return list.filter(special => special.cocktails);
            case "Food": return list.filter(special => special.food);
            default: return list;
        }
    }


    const [selectedDay, setSelectedDay] = useState("All");
    console.log(selectedDay)
    function dayFilter(list) {
        switch(selectedDay) {
            case "All": return list;
            case "Monday": return list.filter(special => special.monday);
            case "Tuesday": return list.filter(special => special.tuesday);
            case "Wednesday": return list.filter(special => special.wednesday);
            case "Thursday": return list.filter(special => special.thursday);
            case "Friday": return list.filter(special => special.friday);
            case "Saturday": return list.filter(special => special.saturday);
            case "Sunday": return list.filter(special => special.sunday);
            default: return list;
        }
    }

    const specialsToShow = dayFilter(typeFilter(specials.filter(special => special.location_neighborhood === selectedNeighborhood || selectedNeighborhood === "All")))

    return (
        <div className="card-list">
        <h5 style={{backgroundColor: "white", justifyContent: 'center', alignItems: 'center', display: "inline-block" }}>Neighborhood:&nbsp;
            <DropdownButton as={ButtonGroup} title={selectedNeighborhood} onSelect={(eventKey) => setSelectedNeighborhood(eventKey)}>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                {neighborhoods.map(neighborhood => {
                    return <Dropdown.Item key={neighborhood} eventKey={neighborhood} >{neighborhood}</Dropdown.Item>})}
            </DropdownButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What's on Special:&nbsp;
            <DropdownButton as={ButtonGroup} title={selectedType} onSelect={(eventKey) => setSelectedType(eventKey)}>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="Beer">Beer</Dropdown.Item>
                <Dropdown.Item eventKey="Wine">Wine</Dropdown.Item>
                <Dropdown.Item eventKey="Cocktails">Cocktails</Dropdown.Item>
                <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
            </DropdownButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day:&nbsp;
            <DropdownButton as={ButtonGroup} title={selectedDay} onSelect={(eventKey) => setSelectedDay(eventKey)}>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="Monday">Monday</Dropdown.Item>
                <Dropdown.Item eventKey="Tuesday">Tuesday</Dropdown.Item>
                <Dropdown.Item eventKey="Wednesday">Wednesday</Dropdown.Item>
                <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
                <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
                <Dropdown.Item eventKey="Saturday">Saturday</Dropdown.Item>
                <Dropdown.Item eventKey="Sunday">Sunday</Dropdown.Item>
            </DropdownButton>
        </h5>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CreateNewSpecial neighborhoods={neighborhoods} times={times} />
        <br></br><br></br>
        <Button onClick={() => setShowMap(!showMap)}>{showMap ? "Show List" : "Specials Near Me (Map)"}</Button>
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
        </div>
    )
}

export default SpecialCardList