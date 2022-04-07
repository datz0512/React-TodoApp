import React, {useState} from 'react'
import Button from '../../UI/Button/Button'

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    
    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault()
        props.onAddGoal(enteredValue)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}></input>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseInput
