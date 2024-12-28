import React , {useState} from 'react';
import styles from './ToDoList.module.css';
const ToDoList = () => {    
    const [Tasks, setTask] = useState(['hackstuff up ', 'play videogames', 'Loadup NAS deck' ,'sleepwell']); //this is the list of tasks
    const [newTask, setNewTask] = useState(''); //this is the input field value
    const  handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== '')
        {setTask(T => [...T, newTask]);
        setNewTask('');}
    }

    const deleteTask = (index) => {
        setTask(Tasks.filter((_, i) => i !== index));

    }
    
    const moveTaskUp  = (index) => {
        if(index > 0){
            const updatedTasks = [...Tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if(index < Tasks.length - 1){
            const updatedTasks = [...Tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
    <>
        <div className={styles.todolist}>
            <h1>TO-DO List</h1>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className={styles.addButton} onClick={addTask}>Add</button>
            <ol>
                {Tasks.map((task, index) => (
                    <li key={index}>
                        <span className={styles.text}>{task}</span><> </>
                        <button className={styles.deleteButton} onClick={() => deleteTask(index)}>❌Delete</button>
                        <button className={styles.upButton} onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className={styles.downButton} onClick={() =>moveTaskDown(index)}>👇</button>
                    </li>
            ))}
            </ol>
        </div>
    </>);
}

export default ToDoList;