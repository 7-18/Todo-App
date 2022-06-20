import { useState } from "react";
import { DivButtonsResponsive } from "../styles/ButtonsStyles";
import { Container, Main, SpanDrag } from "../styles/GeneralStyles";
import { Background } from "./Background";
import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { TaskList } from "./TaskList";

export const Home = () => {
  const [theme, setTheme] = useState("light");
  const [tasksFiltered, setTasksFiltered] = useState("all");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const updateFiltered = (filter) => {
    setTasksFiltered(filter);
  };

  return (
    <Container className={theme}>
      <Main>
        <Background theme={theme} changeTheme={changeTheme} />
        <Form theme={theme} />
        <TaskList theme={theme} listFilter={tasksFiltered} updateFiltered={updateFiltered} />
        <DivButtonsResponsive className={theme}>
          <Buttons
            updateFiltered={updateFiltered}
            filter={tasksFiltered}
          />
        </DivButtonsResponsive>
        <SpanDrag className="drag-span">Drag and drop to reorder list</SpanDrag>
      </Main>
    </Container>
  );
};
