import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import './index.css'; // Import your Tailwind CSS file

function App() {

  const [editValue, setEditValue] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>(['test 1']);


  const handleAddNewtodo = (value: string) => {
    setTodoList((exisitingData) => [value, ...exisitingData])
    setEditValue('')
  }
  const deleteHandler = (todoIndex: number) => {
    // setTodoList((existingTodos) => existingTodos.splice(todoIndex, 1))

    setTodoList((exisitingData) => exisitingData.filter((todo, index: number) => index != todoIndex)); // O(n) -> O(logn)
  }
  const editHandler = (todoIndex: number) => {
    setEditValue(todoList[todoIndex])
    setTodoList((exisitingData) => exisitingData.filter((todo, index: number) => index != todoIndex));
  }
  return (
    <div className='flex  justify-center h-screen'>

      <div className='max-w-md mt-2'>
        <h1 className='uppercase tracking-wide text-3xl text-center text-grey-600 font-bold'>Todo Application</h1>
        <AddTodo addTodo={(event: string) => handleAddNewtodo(event)}
          editTodoValue={editValue}
        />
        <TodoList
          todoList={todoList}
          onDelete={(event: number) => deleteHandler(event)}
          onEdit={(event: number) => editHandler(event)}
          editMode={editValue}
        />
      </div>
    </div>
  )
}

export default App
