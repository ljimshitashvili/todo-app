import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";

import {
  desktopLight,
  desktopDark,
  mobLight,
  mobDark,
} from "./assets/todo-app-main";

import { Header, CreateNew, List } from "./components";

function App() {
  const [light, setLight] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);

  return (
    <Container light={light}>
      <GlobalStyle />
      <Header light={light} setLight={setLight} />
      <CreateNew light={light} setInputValue={setInputValue} />
      <List />
    </Container>
  );
}

export default App;

const Container = styled.div<{ light: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(p) => (p.light ? mobLight : mobDark)});
  background-repeat: no-repeat;
  background-size: 100%;
`;
