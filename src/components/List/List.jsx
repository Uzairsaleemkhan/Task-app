import { useState } from "react";
import styles from "./List.module.css";
import Todo from "../Todo/Todo";

export default function List({todos,onDelete,onDone,onEdit}){

    return(
<>
<ul className={styles.list}>
    {todos.map((todo)=>(

<li className={styles.listItem}  key={todo.id}>
<Todo todo={todo} onDelete={onDelete} onDone={onDone} onEdit={onEdit}/>
</li>
    ))}
</ul>
</>


    )
}