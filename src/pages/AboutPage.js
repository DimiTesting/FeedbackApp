import Card from "../components/shared/Card"
import {Link} from "react-router-dom"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>This an application which gathers a feedback</h1>
                <p>Created by the React</p>
                <p>
                    <Link to="/"> Go back to the Feeback page</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage