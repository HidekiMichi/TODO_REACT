import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';
import Message from './Components/Message';
import './App.css';
import { useState } from 'react';


function App() {

 
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate)=>{
    const newTodoItems = [...todoItems,{name : itemName, dueDate : itemDueDate},
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };


 return(
  <center className='todo-container'>
    <AppName></AppName>
    <AddTodo onNewItem={handleNewItem}></AddTodo>
    {todoItems.length === 0 && <Message></Message>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
 );
}

export default App
