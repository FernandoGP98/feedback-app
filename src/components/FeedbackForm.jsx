import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisable, setBtnDisable] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
      // Validation everytime we type somthing in
      // If there is nothing on text, don't show it

      //Changed the validation for target
      //cause text grabbed the value before the change.
      //if (text === ""){
      if (e.target.value === ""){
        setBtnDisable(true)
        setMessage(null)
      }else if(e.target.value !== "" && e.target.value.trim().length <= 10){ //If the text has less than 10 characters
        setBtnDisable(true)
        setMessage('Text must be atleast 10 characters')
      }else{ //The text has something and is more than 10 characters
        setMessage(null)
        setBtnDisable(false)
      }
      setText(e.target.value)   
    }
  return (
    <Card>
        <form action="">
            <h2>How would you rate our server?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type='submit' isDisable={btnDisable}>Send</Button>
            </div>

            {/* Condition to make sure there is a message */}
           {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}
