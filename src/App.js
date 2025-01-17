import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {FeedbackProvider} from "./context/FeedbackContext"

const App = function App() {


    return (
        <FeedbackProvider>
        <Router>
            <Header/>
                <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
                </div>
                <AboutIconLink/>
        </Router>
        </FeedbackProvider>
    )
}

export default App