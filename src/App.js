import React, { useState } from 'react'
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'
import CourseGoalItem from './components/CourseGoals/CourseGoalItem/CourseGoalItem'
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id:'g1'},
    { text: 'Do all exercises!', id:'g1'}
  ])

  const AddGoalHandler = (enteredText) => {
    setCourseGoals = prevGoals => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({text:enteredText, id:Math.random().toString()})
      return updatedGoals
    }
  } 

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId)
      return updatedGoals
    })
  }

  let content = (
    <p style={{textAlign:'center'}}>No goal found! Maybe add one?</p>
  )

  if(courseGoals.length() > 0){
    <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={AddGoalHandler} />
      </section>
      <section id='goals'>
        {content}
      </section>
    </div>
  )
}

export default App



