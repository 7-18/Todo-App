import React from "react";
import Sun from "../assets/images/icon-sun.svg";
import Moon from "../assets/images/icon-moon.svg";
import { BtnTheme, Header, Title } from "../styles/GeneralStyles";

export const Background = ({ theme, changeTheme }) => {
  return (
    <Header>
      <Title>TODO</Title>
      <BtnTheme onClick={() => changeTheme()}>
        {theme === "light" ? (
          <img src={Moon} alt="Moon" />
        ) : (
          <img src={Sun} alt="Sun" />
        )}
      </BtnTheme>
    </Header>
  );
};
