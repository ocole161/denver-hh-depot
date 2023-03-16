import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';

function CreateNewSpecial() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);
    const [formData, setFormData] = useState({
        location_name: "",
        location_image: "",
        location_neighborhood: "",
        location_address: "",
        location_url: "",
        start_time: "",
        end_time: "",
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        beer: false,
        wine: false,
        cocktails: false,
        food: false,
        hh_special_text: "",
        needs_create_review: true,
    })
    const { location_name, location_image, location_neighborhood, location_address, location_url, start_time, end_time, hh_special_text } = formData
    
    const neighborhoods = [
        "Arvada", 
        "Aurora", 
        "Broomfield", 
        "Cap Hill", 
        "Central Downtown", 
        "Cherry Creek", 
        "DTC", 
        "East Colfax", 
        "Five Points", 
        "Golden", 
        "Hilands", 
        "Lakewood", 
        "Littleton", 
        "LoDo", 
        "LoHi", 
        "North Denver", 
        "Northfield", 
        "Parker",
        "RiNo",
        "Santa Fe", 
        "South Broadway", 
        "Thornton", 
        "University", 
        "Uptown", 
        "Wash Park", 
        "West Denver", 
        "Westminster", 
        "Wheat Ridge"
    ]
    const times = [ '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM',  '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM',  '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM',  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',  '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM']

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/specials", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok) {
                r.json().then(
                navigate("/admin"),
                window.alert("Property added!")
                )
            } else {
                r.json().then(json => setErrors(json.error))
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Location Name</Form.Label>
                <Form.Control type="text" name="location_name" value={location_name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group >
                <Form.Label>Location Image URL</Form.Label>
                <Form.Control type="url" name="location_image" value={location_image} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Neighborhood</Form.Label>
                <Form.Select aria-label="Select" name="location_neighborhood" value={location_neighborhood} onChange={handleChange} >
                    <option value="">Select Neighborhood</option>
                    {neighborhoods.map(neighborhood => {
                        return <option key={neighborhood} value={neighborhood} >{neighborhood}</option>})}
                </Form.Select>
            </Form.Group>
            <Form.Group >
                <Form.Label>Location Address</Form.Label>
                <Form.Control type="text" name="location_address" value={location_address} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Website</Form.Label>
                <Form.Control type="url" name="location_url" value={location_url} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Start Time:</Form.Label>
                <Form.Select aria-label="Select" name="start_time" value={start_time} onChange={handleChange} >
                    <option value="">Select Start Time</option>
                    {times.map(time => {
                        return <option key={time} value={time}>{time}</option>})}
                </Form.Select>
            </Form.Group>
            <Form.Group >
            <Form.Label>End Time:</Form.Label>
                <Form.Select aria-label="Select" name="end_time" value={end_time} onChange={handleChange} >
                    <option value="">Select End Time</option>
                    {times.map(time => {
                        return <option key={time} value={time}>{time}</option>})}
                </Form.Select>
            </Form.Group>
            <Form.Group >
                <Form.Label>Days of the Week</Form.Label>
                <div>
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Mon' name='monday' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Tue' name='tuesday' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Wed' name='wednesday' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Thu' name='thursday' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Fri' name='friday' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Sat' name='saturday' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Sun' name='sunday' value={true} onChange={() => handleChange} />
                </div>
            </Form.Group>
            <Form.Group >
                <Form.Label>Types of Specials</Form.Label>
                <div>
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Beer' name='beer' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Wine' name='wine' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Cocktails' name='cocktails' value={true} onChange={() => handleChange} />
                    <Form.Check inline type="checkbox" id='default-checkbox' label='Food' name='food' value={true} onChange={() => handleChange} />
                </div>
            </Form.Group>
            <Form.Group >
                <Form.Label>Happy Hour Specials</Form.Label>
                <Form.Control as="textarea" rows="3" required name="hh_special_text" value={hh_special_text} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {errors ? <Alert variant="warning" >{errors}</Alert> : null}
        </Form>
    )
}

export default CreateNewSpecial