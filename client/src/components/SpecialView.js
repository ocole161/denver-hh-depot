import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import MapSingle from "./MapSingle"


function SpecialView() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const specials = useSelector((state) => state.specials);
    const { id } = useParams()
    const special = specials.find((special) => special.id === parseInt(id))
    
    const startTime = new Date(special.start_time);
    const endTime = new Date(special.end_time);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC'};
    const startTimeString = startTime.toLocaleTimeString('eng-US', options);
    const endTimeString = endTime.toLocaleTimeString('eng-US', options)
    
    const [errors, setErrors] = useState(null);
    const [userRating, setUserRating] = useState(null);


    useEffect(() => {
        fetch("/user_special_reviews")
        .then(res => res.json())
        .then(reviews => {
            setUserRating(reviews.find(review => review.user.id === user.id && review.special.id === parseInt([id])))
        })
    }, [id, user.id])
    

    function requestDelete(e) {
        e.preventDefault();
        fetch(`/specials/${special.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({...special, needs_delete_review: true}),
        })
        .then(r => {
            if(r.ok) {
                r.json().then(
                    navigate("/"),
                    window.alert("Your deletion request will be reviewed by an administrator soon.")
                )
            } else {
                r.json().then(json => setErrors(json.error))
            }
        })
    }

    function changeRating(e) {
        if(!userRating) {
            const formData = {
                user_id: user.id,
                special_id: id,
                rating: e.target.value,
            }
            fetch("/user_special_reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            .then(r => {
                if(r.ok) {
                    r.json().then(
                    setUserRating(formData)
                    )
                } else {
                    r.json().then(json => setErrors(json.error))
                }
            })
        } else {
            const formData = ({...userRating, rating: e.target.value})
            fetch(`/user_special_reviews/${userRating.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData)
            })
            .then(r => {
                if(r.ok) {
                    r.json().then(
                    setUserRating(formData)    
                    )
                } else {
                    r.json().then(json => setErrors(json.error))
                }
            })
        }
        
        
        

    }

    return (
        <>
        <h1 className="special-view-title">{special.location_name}</h1>
        <Image fluid thumbnail="true" rounded="true" src={special.location_image} alt={special.location_name} />
        <h3>Happy Hour: {startTimeString} - {endTimeString}</h3>
        <h3>Days: 
            {special.monday ? " Monday" : null}
            {special.tuesday ? " Tuesday" : null}
            {special.wednesday ? " Wednesday": null}
            {special.thursday ? " Thursday" : null}
            {special.friday ? " Friday" : null}
            {special.saturday ? " Saturday" : null}
            {special.sunday ? " Sunday" : null}
        </h3>
        <p>{special.location_address}</p>
        <p>Specials: {special.hh_special_text}</p>
        <a href={special.location_url}>Website</a>
        <Form.Group>
            <Form.Label>Your Rating</Form.Label>
            <Form.Select name="rating" value={userRating ? userRating.rating : ""} onChange={changeRating}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
        </Form.Group>
        <Button href={`/specials/edit/${id}`}>Edit</Button>
        <Button onClick={requestDelete}>Request Deletion</Button>
        {errors ? <Alert variant="warning" >{errors}</Alert> : null}
        <MapSingle special={special} />
        </>
    )
}
export default SpecialView
