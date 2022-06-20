import styled from "styled-components";
import bgLight from "../assets/images/bg-desktop-light.jpg";
import bgDark from "../assets/images/bg-desktop-dark.jpg";
import { themes } from "./Themes";

export const Container = styled.div`
@media (prefers-color-scheme: dark) {
  background-repeat: no-repeat;
  background-color: ${(props) =>
    props.className.includes("light")
      ? themes.light.background
      : themes.dark.background};
  background-image: ${(props) =>
    props.className.includes("light") ? `url(${bgLight})` : `url(${bgDark})`};

  & > main > span.drag-span {
    color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorPlaceholder
        : themes.dark.colorPlaceholder};
  }
}

@media (prefers-color-scheme: light) {
  background-repeat: no-repeat;
  background-color: ${(props) =>
    props.className.includes("light")
      ? themes.light.background
      : themes.dark.background};
  background-image: ${(props) =>
    props.className.includes("light") ? `url(${bgLight})` : `url(${bgDark})`};

  & > main > span.drag-span {
    color: ${(props) =>
      props.className.includes("light")
        ? themes.light.colorPlaceholder
        : themes.dark.colorPlaceholder};
  }
}
`;

export const Main = styled.main`
  max-width: 540px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 580px) {
    max-width: 90%;
  }
`;

export const Header = styled.header`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  letter-spacing: 15px;
  font-size: 40px;
  font-weight: 700;
  user-select: none;
`;

export const BtnTheme = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 25px;
  height: 25px;
`;

export const SpanDrag = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  user-select: none;
`;
