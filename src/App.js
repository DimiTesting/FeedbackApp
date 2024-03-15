import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./FeedbackData"
import { useState } from "react"

const App = function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
        <Header />
        <div className="container">
            <h1> My App </h1>
            <FeedbackList feedback={feedback} />
        </div>
        </>
    )
}

export default App