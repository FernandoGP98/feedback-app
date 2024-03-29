import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Este objeto es del context 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'Este objeto es del context 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'Este objeto es del context 3',
            rating: 8,
        },
    ])

    const [feedBackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedBack = (newFeedBack) => {
        //uuidv4 creates a random id for the object
        newFeedBack.id = uuidv4()
        //The state is inmutable (cannot pushe on to it)
        //Make a copy of it
        //[Put the new feedback on top of everything, Getting all the element in feedBack an 
        //putting them in the array]
        setFeedback([newFeedBack, ...feedback])
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    //Update selected feedback
    const updateFeedback = (id, upItem) => {
        setFeedback(feedback.map((item) => (
            item.id === id ? { ...item, ...upItem } : item
            // if(item.id ==== id){
            //     item=upItem
            // }else{
            //     item=item
            // }
        )))
    }

    //Delete the feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        //State that holds the feedback information
        feedBackEdit,
        //Ass new feedback item
        addFeedBack,
        //Update feedback item
        updateFeedback,
        //Edit function
        editFeedback,
        //Delete feedback item
        deleteFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext