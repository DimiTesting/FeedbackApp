import { useState } from "react"
import Card from "./Card"

function FeebackForm() {
    const [text, setText] = useState('')

    function handleTextChange(e) {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate our services?</h2>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange}/>
                </div>
                <button type="submit"></button>
            </form>
        </Card>
    )
}

export default FeebackForm