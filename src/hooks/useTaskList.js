import { Task } from "../components/Task";
import { useDispatch } from "react-redux";
import {
  taskDeleteAsync,
  taskEditAsync,
  taskListAsync,
} from "../redux/actions/taskActions";
export const useTaskList = (tasks, theme, tasksFiltered) => {
  const dispatch = useDispatch();
  const updateTask = (title) => {
    const editTask = tasks.find((task) => task.title === title);

    if (editTask) {
      editTask.checked = !editTask.checked;
      dispatch(taskEditAsync(editTask));
    }
    dispatch(taskListAsync());
  };

  const taskList = tasks.map(({ title, checked }, index) => {
    return (
      <Task
        key={index}
        index={index}
        id={title}
        theme={theme}
        updateTask={updateTask}
        checked={checked}
        title={title}
      />
    );
  });

  const taskListActive = tasks.map(({ title, checked }, index) => {
    if (checked) return "";
    return (
      <Task
        key={index}
        index={index}
        id={title}
        theme={theme}
        updateTask={updateTask}
        checked={checked}
        title={title}
      />
    );
  });

  const taskListCompleted = tasks.map(({ title, checked }, index) => {
    if (!checked) return "";
    return (
      <Task
        key={index}
        index={index}
        id={title}
        theme={theme}
        updateTask={updateTask}
        checked={checked}
        title={title}
      />
    );
  });

  const filteredTask = () => {
    if (tasksFiltered === "active") return taskListActive;
    else if (tasksFiltered === "completed") return taskListCompleted;
    else return taskList;
  };

  const clearCompleted = () => {
    const tasksToDelete = tasks.filter((task) => task.checked);

    tasksToDelete.forEach((task) => {
      dispatch(taskDeleteAsync(task.title));
    });
  };

  return [filteredTask, clearCompleted];
};
