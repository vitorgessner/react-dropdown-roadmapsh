import { useEffect, useState } from "react";
import Back from "../Back";
import './TasksList.css'
import Form from "../Form";
import Task from "../Task";

export default function TasksList() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState([...storedTasks ?? '']);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    function handleDelete(id) {
        setTasks(tasks.filter(t => t.id !== id))
    }

    function handleEdit(e, id) {
        setTasks(tasks.map(t => {
            if (t.id === id) {
                return {
                    ...t,
                    isEditing: !t.isEditing
                }
            } else {
                return {
                    ...t
                }
            }
        }))
    }

    function handleEditChange(e, id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    name: e.target.value
                }
            } else {
                return task
            }
        }))
    }

    function handleToggleComplete(id) {
        setTasks(tasks.map(task => {
            if (task.id !== id || task.isEditing) return task
            task.isCompleted = !task.isCompleted;
            return task;
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!newTask) return

        for (const t of tasks) {
            if (t.name === newTask) {
                setNewTask('')
                return;
            }
        }

        setTasks([...tasks, {
            id: storedTasks[storedTasks.length - 1]?.id + 1 || 1,
            name: newTask,
            isEditing: false,
            isCompleted: false
        }])
        setNewTask('')
    }

    return (
        <>
            <div className="main container center">
                <h1>Tasks</h1>
                <Form handleSubmit={handleSubmit} handleChange={(e) => setNewTask(e.target.value)} value={newTask} />
                <ul>
                    {tasks.map(task =>
                        <Task
                            key={task.id}
                            handleToggleComplete={handleToggleComplete}
                            handleEdit={handleEdit}
                            handleEditChange={handleEditChange}
                            handleDelete={handleDelete}
                            task={task}
                        />
                    )
                    }
                </ul>
            </div>
            <Back />
        </>
    )
}