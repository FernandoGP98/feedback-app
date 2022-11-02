import { useState } from 'react'

import Header from './components/header'
//import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
function App(){
    /*
    Construyendo un array de lo que regresa
    la funcion useState
        param 1: Nombre del estate
        param 2: Funcion para actualizar este state
    */
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    //return JSX
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm></FeedbackForm>
                <FeedbackStats feedback={feedback}></FeedbackStats>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App