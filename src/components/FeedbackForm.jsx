import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
     setText(e.target.value)   
    }
  return (
    <Card>
        <form action="">
            <h2>How would you rate our server?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type='submit'>Send</Button>
            </div>
        </form>
    </Card>
  )
}
