import { useState } from 'react'

import Header from './components/header'
//import FeedbackItem from './components/FeedbackItem'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
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
    const addFeedBack = (newFeedBack) => {
        //uuidv4 creates a random id for the object
        newFeedBack.id=uuidv4()
        //The state is inmutable (cannot pushe on to it)
        //Make a copy of it
        //[pUt the new feedback on top of everything, Getting all the element in feedBack an putting them in the array]
        setFeedback([newFeedBack, ...feedback])
    }

    //return JSX
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm handleAdd={addFeedBack}></FeedbackForm>
                        <FeedbackStats feedback={feedback}></FeedbackStats>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </>
                    }>
                    </Route>
                    
                    <Route path='/about' element={<About/>}></Route>
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
    )
}

export default App