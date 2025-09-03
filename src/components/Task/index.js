import { FaTrash, FaPen } from 'react-icons/fa'

export default function Task({ handleToggleComplete, handleEdit, handleEditChange, handleDelete, task }) {
    return (
        <div className="flex">
            <li className="task" onClick={(id) => handleToggleComplete(task.id)}>
                {!task.isEditing && <><input type="checkbox" checked={task.isCompleted} readOnly /><span className={task.isCompleted ? 'completed' : ''}>{task.name}</span></>}
                {task.isEditing && <><input type="text" value={task.name} onChange={(e, id) => handleEditChange(e, task.id)} className="editing" /></>}
            </li>
            <button className="icon-container edit" onClick={(e, id) => handleEdit(e, task.id)}>
                <FaPen className="icon" />
            </button>
            <button className="icon-container delete" onClick={(id) => handleDelete(task.id)}>
                <FaTrash className="icon" />
            </button>
        </div>
    )
}