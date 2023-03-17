import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SpecialCard({ special }) {
    const startTime = new Date(special.start_time);
    const endTime = new Date(special.end_time);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC'};
    const startTimeString = startTime.toLocaleTimeString('eng-US', options);
    const endTimeString = endTime.toLocaleTimeString('eng-US', options)

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
        </Card>
        </Link>
    )
}

export default SpecialCard