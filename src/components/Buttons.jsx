import { ButtonStyled } from "../styles/ButtonsStyles";

export const Buttons = ({ updateFiltered, taskFilters }) => {
  const handleClick = (filter) => {
    updateFiltered(filter);
  };

  return (
    <>
      <ButtonStyled
        className={taskFilters == "all" ? "select" : ""}
        value="all"
        onClick={() => handleClick("all")}
      >
        All
      </ButtonStyled>
      <ButtonStyled
        className={taskFilters == "active" ? "select" : ""}
        value="active"
        onClick={() => handleClick("active")}
      >
        Active
      </ButtonStyled>
      <ButtonStyled
        className={taskFilters == "completed" ? "select" : ""}
        onClick={() => handleClick("completed")}
      >
        Completed
      </ButtonStyled>
    </>
  );
};
