import { useState } from "react"
import styles from "./Todos.module.css"
import List from "../List/List.jsx";
let nextId=3;


export default function Todos(){
   const [todos, setTodos]=useState([
    
    {
        content:"Do the Laundary",
        done: false,
        id:0
}
,{
    content:"Do the dishes",
    done:false,
    id:1
}
,{
    content:"Complete the homework",
    done:true,
    id:2
}
   ])
   
    const [currentVal, setCurrentValue]= useState("")

function handleDelete(index){
setTodos(
    todos.filter((todo)=>(
        todo.id!==index
    ))
)


}

function handleAdd(){

    if(currentVal){

        setTodos(
            [...todos,{content:currentVal,done:false,id:nextId++}]
        )



    }


}


function handleDone(done, index){

    setTodos(todos.map((todo)=>{
        if(todo.id===index){
                return {...todo,done:!done}
        }
        else{
            return todo
        }
    }))


}

function handleEdit(next){


    setTodos(
        todos.map((todo)=>{
            if(todo.id===next.id){
                return next
            }
            else{
                return todo
            }
        })
    )
}




    return(
        <>
            <section className={styles.todos}>
            <div className={styles.container}>

                <div className={styles.addContainer}>
                    <input className={styles.input} type="text" value={currentVal} onChange={e=>setCurrentValue(e.target.value)}/>
                    <button onClick={handleAdd} className={styles.add}>
                        ADD
                    </button>
                </div>

                <div className={styles.listContainer}>
                  <List onEdit={handleEdit} onDone={handleDone} onDelete={handleDelete} todos={todos}/>  
                </div>
            </div>
            </section>
        </>
    )





}


