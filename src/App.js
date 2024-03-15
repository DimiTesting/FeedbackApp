import Header from "./components/Header"
import Feedback from "./components/FeedbackItem"

const App = function App() {
    return (
        <>
        <Header />
        <div className="container">
            <h1> My App </h1>
            <Feedback />
        </div>
        </>
    )
}

export default App