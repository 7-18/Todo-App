import { ButtonStyled } from "../styles/ButtonsStyles";

export const Buttons = ({ updateFiltered, filter }) => {
  const handleClick = (filter) => {
    updateFiltered(filter);
  };

  const all = "all";
  const active = "active";
  const completed = "completed"
  return (
    <>
      <ButtonStyled
        className={`${filter === "all" ? "select" : ""}`}
        value="all"
        onClick={() => handleClick(all)}
      >
        All
      </ButtonStyled>
      <ButtonStyled
        className={filter === "active" ? "select" : ""}
        value="active"
        onClick={() => handleClick(active)}
      >
        Active
      </ButtonStyled>
      <ButtonStyled
        className={filter === "completed" ? "select" : ""}
        value="completed"
        onClick={() => handleClick(completed)}
      >
        Completed
      </ButtonStyled>
    </>
  );
};
