import { nanoid } from "nanoid";
import { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks); // returns 2-item array
  // tasks = props.tasks
  // setTasks() changes tasks

  // CALLBACK FUNCTIONS
  // 1. ADD TASK
  function addTask(name) {
    // alert(name);
    // TODO add task to taskList with setTasks()
    // make newTask object with parameters id, name, completed,
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    // taskList2 = [...taskList1];
    // taskList2.push(newTask);
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  // 2. TOGGLE COMPLETED
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted (reassigned)
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // 3. DELETE TASK
  function deleteTask(id) {
    // console.log(id);
    // const updatedTasks = tasks.map((task) => {
    //   if (id === task.id) {

    //   }
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }

  // 4. EDIT TASK
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // RENDERING (?)

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      complete={task.completed}
      key={task.id} // key is a reserved word
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1 hidden={false}>TodoMatic</h1>
      {/* same name "addTask" is a coincidence; try onAddTask */}
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;

