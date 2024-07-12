import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

const Todo = () => {
    const todos = useSelector(state => state.todos.todos || []);
    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const saveEdit = (id) => {
        dispatch(updateTodo({ id, text: editText }));
        setEditId(null);
        setEditText('');
    };

    return (
        <>
            <div>Todos</div>
            <ul className='list-none'>
                {todos.map((todo) => (
                    <li key={todo.id}
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                        {editId === todo.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={handleEditChange} // Update state as input changes
                                className='bg-gray-700 text-white p-2 rounded'
                            />
                        ) : (
                            <div className='text-white'>{todo.text}</div>
                        )}
                        <div className='flex space-x-2'>
                            {editId === todo.id ? (
                                <button onClick={() => saveEdit(todo.id)}>
                                    <FaSave className='text-green-500' />
                                </button>
                            ) : (
                                <button onClick={() => startEdit(todo)}>
                                    <FaEdit className='text-yellow-500' />
                                </button>
                            )}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>
                                <FaTrash className='text-red-500' />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todo;
