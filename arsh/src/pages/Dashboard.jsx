import { useEffect , useState } from "react"
// import TodoList from "../components/TodoList";
// import { IoMdadd } from "react-icons/io";


const Dashboard = () => { 
    
    const [data,setData ] = useState("")
    const [todoList,setTodoList] = useState([])

    const handilesubmit = () => {
        
        setTodoList([...todoList,])
        console.log(todoList)
        setData("")
    }
    return(
        <div className="bg-blue-300 w-300px justify-center content-center">
            <div className="justify-item-center">
                <input
                className="border-b-cyan-100"
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}/>
                <button
                className="bg-amber-100 rounded-2x1 p-4"
                onClick={handilesubmit} >Add</button>
            </div>
        </div>
    )
}

export default Dashboard