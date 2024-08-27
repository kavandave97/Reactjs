import { useState } from 'react'
import AddTodo from './Componets/AddTodo'
import Todos from './Componets/Todos'

const App = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App