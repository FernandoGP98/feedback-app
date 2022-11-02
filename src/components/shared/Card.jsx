import PropTypes from "prop-types"
function Card({children, reverse}) {
    return (
        /*Conditional class
        ${}= if*/

        <div className={`card ${reverse && 'reverse'}`}>{children}</div>

        /*Conditional style*/
        /*<div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>{children}</div>*/
    )
}

Card.defaultProps = {
    reverser: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverser: PropTypes.bool
}

export default Card