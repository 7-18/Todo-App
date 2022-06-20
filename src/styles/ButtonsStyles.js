import styled from "styled-components";
import { themes } from "./Themes";

export const DivButtons = styled.div`
  display: flex;
  width: 166px;
  justify-content: space-between;

  & > button {
    color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorTextLight
        : themes.dark.colorTextLight};

    &:hover {
      color: ${(props) =>
        props.className.includes("light")
          ? themes.light.colorBtnHover
          : themes.dark.colorBtnHover};
    }
  }

  @media (max-width: 580px) {
    display: none;
    justify-content: center;
  }
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  border: none;
  padding: 10px;

  &:focus {
    border: none;
  }

  &.select, &.select:hover {
    color: var(--bright-blue);
  }

  @media (max-width: 580px) {
    justify-content: center;
  }
`;

export const DivButtonsResponsive = styled(DivButtons)`
  @media (max-width: 580px) {
    display: flex;
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorListBg
        : themes.dark.colorListBg};
    box-shadow: ${(props) =>
      props.className.includes("light")
        ? themes.light.shadow
        : themes.dark.shadow};
  }
`;
