import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTaskList } from "../hooks/useTaskList";
import { taskListAsync } from "../redux/actions/taskActions";
import { DivButtons } from "../styles/ButtonsStyles";
import {
  BtnClear,
  DivBottomList,
  DivList,
  LeftItems,
  List,
} from "../styles/TaskListSyles";
import { Buttons } from "./Buttons";

export const TaskList = ({ theme, filter, updateFiltered }) => {
  const { tasks } = useSelector((store) => store.taskStore);
  const dispatch = useDispatch();
  const [filteredTask, clearCompleted] = useTaskList(
    tasks,
    theme,
    filter
  );

  useEffect(() => {
    dispatch(taskListAsync());
  }, []);

  const itemsLeft = tasks.filter((task) => !task.checked).length;

  return (
    <DivList className={theme}>
      <List>{filteredTask()}</List>
      <DivBottomList>
        <LeftItems className="left-items">{itemsLeft} items left</LeftItems>
        <DivButtons className={theme}>
          <Buttons
            updateFiltered={updateFiltered}
            filter={filter}
          />
        </DivButtons>
        <BtnClear className="clear" onClick={() => clearCompleted()}>
          Clear Completed
        </BtnClear>
      </DivBottomList>
    </DivList>
  );
};
