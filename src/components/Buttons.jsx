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
        value="active"
        onClick={() => handleClick(active)}
        className={filter === "active" ? "select" : ""}
      >
        Active
      </ButtonStyled>
      <ButtonStyled
        className={filter === value ? "select" : ""}
        value="completed"
        onClick={() => handleClick(completed)}
      >
        Completed
      </ButtonStyled>
    </>
  );
};
