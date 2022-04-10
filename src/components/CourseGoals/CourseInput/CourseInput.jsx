import React, { useState, useRef } from 'react'
import Button from '../../UI/Button/Button'
import styles from './CourseInput.module.css'

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isValid, setIsValid] = useState(true)
    const inputRef = useRef()

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0){
            setIsValid(true)
        }
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault()
        if(enteredValue.trim().length === 0){
            setIsValid(false)
            return
        }
        props.onAddGoal(enteredValue)
        setEnteredValue('')
        inputRef.current.focus()
    }

    return (
        <form>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
                <label>Course Goal</label>
                <input ref={inputRef} type="text" onChange={goalInputChangeHandler}></input>
            </div>
            <Button onClick={formSubmitHandler}>Add Goal</Button>
        </form>
    )
}

export default CourseInput
