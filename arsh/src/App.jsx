

import { useState } from "react"
import TodoList from "./component/TodoList"

function App() {
  const [count,setCount]=useState(0)

  const MYName = "arshath"
  const age = "22"  
 

  return (
    <>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <button onClick={()=> setCount(count+1)}>count {count}</button>
  <TodoList>
    
  </TodoList>
  </>
   
  )
}

export default App
