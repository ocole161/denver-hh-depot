import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useState } from "react"
import Alert from 'react-bootstrap/esm/Alert';

function SpecialCardReview({ special, onUpdateSpecial }) {
    const startTime = new Date(special.start_time);
    const endTime = new Date(special.end_time);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC'};
    const startTimeString = startTime.toLocaleTimeString('eng-US', options);
    const endTimeString = endTime.toLocaleTimeString('eng-US', options)
    const [errors, setErrors] = useState(null);

    function setReviewed(e) {
        e.preventDefault();
        fetch(`/specials/${special.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({...special, needs_create_review: false, needs_update_review: false}),
        })
        .then(r => {
            if(r.ok) {
                r.json().then((udpatedSpecial) => {
                onUpdateSpecial(udpatedSpecial)
                })
            } else {
                r.json().then(json => setErrors(json.error))
            }
        })
    }

    return (
        <Link to={`/specials/${special.id}`} className="no-format-link">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={special.location_image} alt={special.location_name} />
            <Card.Body>
                <Card.Title>{special.location_name}</Card.Title>
                <Card.Text>{startTimeString} - {endTimeString}</Card.Text>
                <Card.Text>Deals on: 
                    {special.beer ? " Beer" : null} 
                    {special.wine ? " Wine" : null} 
                    {special.cocktails ? " Cocktails" :null} 
                    {special.food ? " Food" : null}</Card.Text>
            </Card.Body>
            <Button onClick={setReviewed}>Mark Reviewed</Button>
            {errors ? <Alert variant="warning" >{errors}</Alert> : null}
        </Card>
        </Link>
    )
}

export default SpecialCardReview