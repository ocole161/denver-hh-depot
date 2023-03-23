import { useSelector, useDispatch } from "react-redux"
import Button from "react-bootstrap/esm/Button";
import SpecialCardReview from "./SpecialCardReview";
import SpecialCardDelete from "./SpecialCardDelete";
import { useState } from "react";
import { removeSpecial } from "../features/specialsSlice";

function Admin({ onUpdateSpecial }) {
    const dispatch = useDispatch();
    const specials = useSelector((state) => state.specials);
    const [show, setShow] = useState("showNew");
    const newSpecials = specials.filter(special => special.needs_create_review)
    const updatedSpecials = specials.filter(special => special.needs_update_review)
    const deleteRequests = specials.filter(special => special.needs_delete_review)
    
    function deleteSpecial(special) {
        dispatch(removeSpecial(special))
    }

    return (
        <>
        <Button onClick={() => setShow("showNew")}>New Submissions</Button>
        <Button onClick={() => setShow("showChanges")}>Changes</Button>
        <Button onClick={() => setShow("showDeleted")}>Delete Requests</Button>
        {(show === "showNew") ? newSpecials.map(special => {
        return <SpecialCardReview key={special.id} special={special} onUpdateSpecial={onUpdateSpecial}/>
        }) : null }
        {(show === "showChanges") ? updatedSpecials.map(special => {
        return <SpecialCardReview key={special.id} special={special} onUpdateSpecial={onUpdateSpecial}/>
        }) : null }
        {(show === "showDeleted") ? deleteRequests.map(special => {
        return <SpecialCardDelete key={special.id} special={special} deleteSpecial={deleteSpecial} onUpdateSpecial={onUpdateSpecial}/>
        }) : null }
        </>
    )
}

export default Admin