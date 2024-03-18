import { useState } from "react"
import Card from "./Card"

function FeebackForm() {
    const [text, setText] = useState()

    function handleTextChange(e) {
        setText(e.input.value)
    }

    return (
        <Card>
            <h2>How would you rate our services?</h2>
            <input type="text" placeholder="provide feeback" value={text} onChange={handleTextChange}/>
            <button type="submit"></button>
        </Card>
    )
}

export default FeebackForm