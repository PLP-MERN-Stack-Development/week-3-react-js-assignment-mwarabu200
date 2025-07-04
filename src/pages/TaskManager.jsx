import { useState, useEffect } from 'react';
import useLocalStorage from '../utils/useLocalStorage';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">📝 Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-grow"
          type="text"
          value={newTask}
          placeholder="Enter a new task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter('all')} className="px-3 py-1 bg-gray-200 rounded">All</button>
        <button onClick={() => setFilter('active')} className="px-3 py-1 bg-gray-200 rounded">Active</button>
        <button onClick={() => setFilter('completed')} className="px-3 py-1 bg-gray-200 rounded">Completed</button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`p-3 border rounded flex justify-between items-center ${
              task.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 font-bold">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
