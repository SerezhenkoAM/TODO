import Checkbox from "./checkbox/Checkbox";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <>
            <div className="flex items-center justify-between  rounded-2xl bg-gray-800 p-5 mb-4">
                <button onClick={() => changeTodo(todo.id)}>
                    <Checkbox isCompleted={todo.isCompleted} />
                </button>
                <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
                <button onClick={() => removeTodo(todo.id)}>
                    <HiOutlineArchiveBoxXMark size={22} className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300" />
                </button>
            </div>
        </>
    );
}

export default TodoItem;