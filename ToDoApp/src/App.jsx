import { useState } from 'react'

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

      <div style={{padding: '2rem', maxWidth: '500px', margin: '0 auto', border: '1px solid white'}}>
        
        <h1>To Do List</h1>

        <form onSubmit={addTask}>
         
          <input type="text" placeholder="Add new task..." value={task} onChange={(e) => setTask(e.target.value)} style={{width: '80%', padding: '0.5rem'}}></input>
          
          <button type="submit" style={{padding: '0.5rem', float: 'right', marginRight: '2rem', marginTop: '1rem'}}>Add</button>

        </form>

        <ul style={{marginTop: '1rem', listStyle: 'none', padding: 0}}>

          {todos.map((todo) => (

            <li key={todo.id} style={{marginBottom: '0.5rem', display: 'flex'}}>

              <span onClick={() => toggleComplete(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer'}}>{todo.text}</span>
              
              <button onClick={() => deleteTask(todo.id)} style={{marginLeft: '1rem', color: 'red'}}>Delete</button>

            </li>

          ))}

        </ul>

      </div>
    )
      
      
  
}

export default App
