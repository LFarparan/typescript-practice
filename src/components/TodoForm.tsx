import React, { useState } from 'react'
import { ToDo } from '../components/model.ts'

interface Props {
    todos: ToDo[],
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>,
}

export default function TodoForm({ todos, setTodos }: Props) {
    const [task, setTask] = useState<string>('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (task) {
            setTodos((ugh) => [...ugh, { id: Date.now(), task, isDone: false }])
            setTask('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter new Task'
                value={task}
                onChange={(e) => { setTask(e.target.value) }} />
            <button type='submit'> ADD </button>
        </form>
    );
}
