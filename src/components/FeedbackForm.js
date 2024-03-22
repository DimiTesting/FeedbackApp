import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeebackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(()=> {
        if (feedbackEdit.edit === true) {
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
        setIsDisabled(false)}
    }, [feedbackEdit])

    function handleTextChange(e) {
        if (text === "") {
            setMessage(null)
            setIsDisabled(true)
        } else if (text !=="" && text.trim().length<=10) {
            setMessage("Text must be at least 10 characters")
            setIsDisabled(true)
        } else {
            setMessage(null)
            setIsDisabled(false)
        }
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (text.trim().length>10) {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our services?</h2>
                <RatingSelect select={(rating)=> setRating(rating)}/> 
                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange}/>
                    <Button type="submit" isDisabled={isDisabled}> Send </Button>
                </div>
            </form>
            {message && <div className="message"> {message} </div>}
        </Card>
    )
}

export default FeebackForm