import { useState } from 'react'
import './todoapp.scss'

function App() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = (e) => {
      e.preventDefault();

      if (task.trim() === '' )  return;

      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
      };
    

    setTodos([...todos, newTodo]);
    setTask('');
    };

    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? {...todo, completed: !todo.completed } : todo
        )
      );
    };

    const deleteTask = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (

        <div className="grid grid-cols-1 grid-rows-3 place-items-center gap-x-4">

        {/* <span>To Do Counter {}</span> */}

        <h1 className="text-3xl font-bold text-center custom-title text-blue-800">To Do List</h1>

        <form onSubmit={addTask} className="flex gap-4">
         
          <input type="text" placeholder="Add new task..." value={task} onChange={(e) => setTask(e.target.value)} className="hover:border-indigo-500 focus:outline-1 focus:outline-indigo-500"></input>
          
          <button type="submit" className="hover:border-indigo-500 hover:bg-slate-900 hover:text-lime-400/70">Add</button>

        </form>

        <ul className="w-full">

          {todos.map((todo) => (

            <li key={todo.id} className="flex items-center justify-between">

              <span onClick={() => toggleComplete(todo.id)} style={{textDecoration: todo.completed ? 'line-through green' : 'line-through red', cursor: 'pointer'}}>{todo.text}</span>
              
              <button onClick={() => deleteTask(todo.id)} className="hover:border-indigo-500 hover:bg-slate-900 hover:text-red-600/80">Delete</button>

            </li>

          ))}

        </ul>

      </div>
    )
      
      
  
}

export default App