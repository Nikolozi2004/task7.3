import React from "react";
import { ACTIONS } from '../App'
export default function Todo({ todo, dispatch }) {
    return (
        <div className="todoComp w-full relative h-1/6 text-center">
            <span
                className="text-lg  text-slate-900"
                style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button
                onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
                className="absolute right-28 text-teal-500 bg-gray-300 w-20 hover:bg-teal-200">
                Toggle

            </button>
            <button
                onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
                className="absolute right-4 text-red-500 bg-gray-300 w-20 hover:bg-red-200">
                Delete
            </button>
        </div>
    )
}
