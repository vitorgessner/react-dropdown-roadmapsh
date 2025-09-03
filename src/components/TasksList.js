import { useState } from "react";
import Back from "./Back";

export default function TasksList() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
        <div className="main container center">
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => <li>task.name</li>)}
            </ul>
        </div>
            <Back />
        </>
    )
}