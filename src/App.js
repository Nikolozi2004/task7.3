import { Fragment, useReducer, useState } from "react";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from 'uuid';
import DeleteAll from "./components/DeleteAll";
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  DELETE_ALL_TODO: 'delete-all-todos',
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.text)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    case ACTIONS.DELETE_ALL_TODO:
      return todos.filter(todos => todos === [])
    default:
      return todos
  }
}

function newTodo(text) {
  return { id: uuidv4(), text: text, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [text, setText] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text: text } })
    setText('')
    if (text === ''){
      return false
    }
  }

  return (
    <Fragment>
      <div className="TodoWrapper w-1/2 h-2/3 overflow-auto bg-slate-500 flex items-center justify-center flex-col relative rounded-md font-semibold bg-gradient-to-r from-cyan-500 to-blue-500">
        <form
          className="absolute top-4 w-full flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="w-2/3 rounded-md text-center h-10 text-xl"
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            required>
          </input>
          <button type="submit" className="absolute top-2 right-10 text-slate-200 bg-green-500 w-12 h-10 rounded-md hover:bg-green-300 hover:text-gray-600">
          Add
        </button>
        </form>
        <div className="h-2/3 overflow-auto w-full flex flex-col items-center bg-zinc-50 w-11/12 rounded-md">
          {todos.map(todos => {
            return <Todo key={uuidv4()} todo={todos} dispatch={dispatch} />
          })}
        </div>
        <DeleteAll todo={todos} dispatch={dispatch} />
        
      </div>

    </Fragment>
  );
}

export default App;
