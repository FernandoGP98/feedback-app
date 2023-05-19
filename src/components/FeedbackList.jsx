//For animations
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import PropTypes from "prop-types"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    } else {

    }
    return (
        <div className="feedback-list">
            {/* Animation
            AnimatePresence wraps the animation section */}
            <AnimatePresence>
                {feedback.map((item) => (
                    // motion.div transform a div into a animated div with a key
                    // initial, set the starting state
                    // animate, what property are you animating
                    // exit, the ending state
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    // <div className="feedback-list">
    //     {feedback.map((item) => (
    //         <FeedbackItem key={item.id} item={item}
    //             handleDelete={handleDelete} />
    //     ))}
    // </div>
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default FeedbackList