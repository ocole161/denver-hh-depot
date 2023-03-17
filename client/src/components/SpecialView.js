// import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image'


function SpecialView() {
    const specials = useSelector((state) => state.specials);
    const { id } = useParams()

    const special = specials.find((special) => special.id === parseInt(id))
    // console.log(special)
    console.log(specials[0])

    return (
        <>
        <h1 className="special-view-title">{special.location_name}</h1>
        <Image fluid thumbnail="true" rounded="true" src={special.location_image} alt={special.location_name} />
        </>
    )
}
export default SpecialView
