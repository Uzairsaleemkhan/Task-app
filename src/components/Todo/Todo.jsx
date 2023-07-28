import styles from "./Todo.module.css"
import { useState } from "react"
export default function Todo({onDelete,onDone,todo,onEdit}){


const [isEditing,setIsEditing]=useState(false);
const [text,setText]=useState("")
    return(
<>
<p onClick={()=>onEdit({...todo,done:!todo.done})} className={styles.para}  style={todo.done?{backgroundColor:"red"}:{backgroundColor:"pink"}}> {todo.content}</p>

{
isEditing?
(

<>
<input onChange={e=>{
onEdit({...todo,content:e.target.value})

}} type="text" />
<button onClick={_=>{
    setIsEditing(false)
}} className={styles.button}>Update</button>
</>
)


:
(

<button onClick={()=>{
    setIsEditing(true)
}} className={styles.button}>Edit</button>
)

}




<button className={styles.button} onClick={_=>onDelete(todo.id)}>Delete</button>
</>
    )
}