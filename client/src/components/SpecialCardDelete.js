import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { removeSpecial } from '../features/specialsSlice';
import { updateSpecial } from '../features/specialsSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/esm/Alert';

function SpecialCardDelete({ special }) {
    const startTime = new Date(special.start_time);
    const endTime = new Date(special.end_time);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC'};
    const startTimeString = startTime.toLocaleTimeString('eng-US', options);
    const endTimeString = endTime.toLocaleTimeString('eng-US', options)
    const [errors, setErrors] = useState(null);

    const dispatch = useDispatch();

    function setIgnored(e) {
        e.preventDefault();
        fetch(`/specials/${special.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({...special, needs_delete_review: false}),
        })
        .then(r => {
            if(r.ok) {
                r.json().then((special) => {
                    dispatch(updateSpecial(special))
                })
            } else {
                r.json().then(json => setErrors(json.error))
            }
        })
        .catch(errors => {
            setErrors(errors);
        })
    }

    function setDeleted(e) {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this special?") === true) {
            fetch(`specials/${special.id}`, {
                method: "DELETE",
            })
            .then(
                console.log(special),
                dispatch(removeSpecial(special))
            )
            .catch(errors => {
                setErrors(errors);
            })
        }
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
            <Button onClick={setDeleted}>Confirm Deletion</Button>
            <Button onClick={setIgnored}>Ignore Request</Button>
            {errors ? <Alert variant="warning" >{errors}</Alert> : null}
        </Card>
        </Link>
    )
}

export default SpecialCardDelete