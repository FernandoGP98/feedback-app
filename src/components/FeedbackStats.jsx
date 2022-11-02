import PropTypes from 'prop-types'

export default function FeedbackStats({feedback}) {

    //Calculate rating average
    let average = feedback.reduce((acc, current)=>{
        return acc + current.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className="feedback-stats">
        <h4>{FeedbackStats.length}</h4>
        <h4>Average rating: {isNaN(average) ? "0" : average}</h4>
        </div>
    )
}

FeedbackStats.protoTypes = {
    feedback: PropTypes.array.isRequired,
}