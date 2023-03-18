// import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image'


function SpecialView() {
    const specials = useSelector((state) => state.specials);
    const { id } = useParams()
    const special = specials.find((special) => special.id === parseInt(id))
    const startTime = new Date(special.start_time);
    const endTime = new Date(special.end_time);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC'};
    const startTimeString = startTime.toLocaleTimeString('eng-US', options);
    const endTimeString = endTime.toLocaleTimeString('eng-US', options)

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
        </>
    )
}
export default SpecialView
