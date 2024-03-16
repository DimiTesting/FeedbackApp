import PropTypes from "prop-types"
import Card from "./Card.js"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({item, handleDelete}) {

    return (
        <Card>
            <div className="num-display"> {item.rating}</div>
            <div className="text-display"> {item.text} </div>
            <button onClick={() =>handleDelete(item.id)} className="close">
                <FaTimes color="purple"/>
            </button>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default FeedbackItem