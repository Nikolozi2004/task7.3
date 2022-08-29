import React from "react";
import { ACTIONS } from '../App'


export default function DeleteAll({ todo, dispatch }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.DELETE_ALL_TODO, payload: { id: todo.id } })}
            className="absolute bottom-4 bg-orange-400 rounded-lg w-24 h-12 hover:bg-orange-200 hover:text-red-800"
        >
            Clear All
        </button>
    )
}