import styled from "styled-components";
import { themes } from "./Themes";
import btnCheck from "../assets/images/icon-check.svg";

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 540px;
  margin-top: 25px;
  border-radius: 5px;
  min-height: 300px;
  background-color: ${(props) =>
    props.className.includes("light")
      ? themes.light.colorListBg
      : themes.dark.colorListBg};
  box-shadow: ${(props) =>
    props.className.includes("light") ? themes.light.shadow : themes.dark.shadow};

  & > div > span.left-items {
    color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorBtn
        : themes.dark.colorBtn};
  }

  button.clear {
    color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorBtn
        : themes.dark.colorBtn};

    &:hover {
      color: ${(props) =>
        props.className.includes("light")
          ? themes.light.colorBtnHover
          : themes.dark.colorBtnHover};
    }
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const DivBottomList = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftItems = styled.span`
  display: block;
  width: 100px;
  font-size: 14px;
`;

export const BtnClear = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export const TaskLi = styled.li`
  position: relative;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  color: ${(props) =>
    props.className.includes("light")
      ? themes.light.colorInput
      : themes.dark.colorListText};
  border-bottom: ${(props) =>
    props.className.includes("light") ? themes.light.border : themes.dark.border};

  &.completed {
    color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorTextCompleted
        : themes.dark.colorTextCompleted};
    text-decoration: line-through;
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:not(:hover) {
    .div-check:not(.completed) {
      border: ${(props) =>
        props.className.includes("light") ? themes.light.border : themes.dark.border};
    }
  }

  &:hover,
  &:focus {
    button {
      opacity: 1;
    }

    .div-check {
      background: linear-gradient(
        135deg,
        hsl(192, 100%, 67%),
        hsl(280, 87%, 65%)
      );

      .check {
        &:not(.completed) {
          width: 22px;
          height: 22px;
          
          background-color: ${(props) =>
            props.className.includes("light")
              ? themes.light.colorListBg
              : themes.dark.colorListBg};
        }
      }
    }
  }

  & > button {
    & > path {
      fill: ${(props) =>
        props.className.includes("light")
          ? themes.light.colorPath
          : themes.dark.colorPath};
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
`;

export const DivCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Check = styled.div`
  display: inline-block;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  background: transparent;

  &.completed {
    background: url(${btnCheck}),
      linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const BtnDelete = styled.button`
  transition: opacity 0.5s ease-in-out;
  background: transparent;
  border: none;
  opacity: 0;
  cursor: pointer;

  &:focus {
    opacity: 1;
  }
`;
