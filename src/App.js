import { useRef } from "react";
import { useStore, actions } from "./Store";

function App(){
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  
  return(
    <div style={{padding: 50}}>
      <input 
        style={{marginBottom: 20}}
        ref={inputRef}
        value={todoInput}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
    
      <button onClick={handleAdd}>Add</button>

      {todos.map((todo, index) => (
        <li style={{listStyleType:'none', marginBottom:10}} key={index}>
          {index+1}
          .&ensp;
          {todo}
          &ensp;
          <button onClick={() => dispatch(actions.deleteTodo(index))}>Xoa</button>
        </li>
      ))}
    </div>
  )
}

export default App;


