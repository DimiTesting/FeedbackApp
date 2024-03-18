import { useState } from "react"
import Card from "./Card"
import Button from "./Button"

function FeebackForm() {
    const [text, setText] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState("")

    function handleTextChange(e) {
        if (text === "") {
            setIsDisabled(true)
            setMessage(null)
        } else if (text !=="" && text.trim().length<=10) {
            setMessage("Text must be at least 10 characters")
            setIsDisabled(true)
        } else {
            setMessage(null)
            setIsDisabled(false)
        }
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate our services?</h2>
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