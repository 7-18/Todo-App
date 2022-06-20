import {
  BtnDelete,
  Check,
  Description,
  DivCheck,
  TaskLi,
} from "../styles/TaskListSyles";
import DeleteIcon from "../assets/images/icon-cross.svg";
import { useDispatch } from "react-redux";
import { taskDeleteAsync } from "../redux/actions/taskActions";
import { useState } from "react";

export const Task = ({ theme, checked, title, updateTask, id }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(checked);
  const handleDelete = (title) => {
    dispatch(taskDeleteAsync(title));
  };

  const updateTaskStatus = (id) => {
    updateTask(id);
    setCompleted(!completed);
  };

  return (
    <TaskLi
      className={`${theme} ${checked ? "completed" : ""} `}
      id={id}
      checked={checked}
    >
      <Description>
        <DivCheck className="div-check" onClick={() => updateTaskStatus(id)}>
          <Check className={`check ${checked ? "completed" : ""}`}></Check>
        </DivCheck>
        <span
          style={{ paddingLeft: "10px" }}
          onClick={() => updateTaskStatus(id)}
        >
          {title}
        </span>
      </Description>
      <BtnDelete className="enabled" onClick={() => handleDelete(title)}>
        <img src={DeleteIcon} alt="Delete" />
      </BtnDelete>
    </TaskLi>
  );
};
