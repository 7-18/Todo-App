import styled from "styled-components";
import { themes } from "./Themes";

export const FormStyled = styled.form`
  div {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    background-color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorListBg
        : themes.dark.colorListBg};
    box-shadow: ${(props) =>
      props.className.includes("light") ? themes.light.shadow : themes.dark.shadow};
  }

  input {
    &:focus {
      color: ${(props) =>
        props.className.includes("light")
          ? themes.light.colorInput
          : themes.dark.colorListText};
    }

    &::placeholder {
      color: ${(props) =>
        props.className.includes("light")
          ? themes.light.colorPlaceholder
          : themes.dark.colorPlaceholder};
    }
  }

  button {
    border: ${(props) =>
      props.className.includes("light") ? themes.light.border : themes.dark.border};
  }
`;

export const Input = styled.input`
  font-size: 18px;
  background-color: transparent;
  border-color: transparent;
  width: 100%;
  position: relative;
  padding-left: 10px;

  &::placeholder {
    color: #9495a5;
  }

  &:focus {
    outline: #ffc0cb;
  }
`;

export const InputBtn = styled.button`
  outline: none;
  display: inline-block;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  background: transparent;
`;
