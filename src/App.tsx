import TodoForm from './components/TodoForm';
import { useState } from 'react'
import { ToDo } from './components/model.ts'
import './App.css'


export default function App(): JSX.Element {

  const [todos, setTodos] = useState<ToDo[]>([
    { id: 123123123, task: 'Clean sheets', isDone: false }
  ])

  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <p> ToDoList </p>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.map((todo) =>
        <div key={todo.id}>
          <span>
            {todo.task} is {todo.isDone ? 'DONE' : 'NOT DONE'}
          </span>
          <button onClick={() => handleDelete(todo.id)} type='button'> Delete </button>
        </div>
      )}
    </>
  );
}


