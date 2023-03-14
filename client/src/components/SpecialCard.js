import Card from 'react-bootstrap/Card';

function SpecialCard({ special}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={special.location_image} alt={special.location_name} />
            <Card.Body>
                <Card.Title>{special.location_name}</Card.Title>
                <Card.Text>{special.start_time} - {special.end_time}</Card.Text>
                <Card.Text>Deals on: 
                    {special.beer ? " Beer" : null} 
                    {special.wine ? " Wine" : null} 
                    {special.cocktails ? " Cocktails" :null} 
                    {special.food ? " Food" : null}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SpecialCard