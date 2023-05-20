import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import {
  desktopLight,
  desktopDark,
  mobLight,
  mobDark,
} from "./assets/todo-app-main";

import { Header } from "./components";

function App() {
  const [light, setLight] = useState<boolean>(true);
  return (
    <Container light={light}>
      <GlobalStyle />
      <Header light={light} setLight={setLight} />
    </Container>
  );
}

export default App;

const Container = styled.div<{ light: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${(p) => (p.light ? mobLight : mobDark)});
  background-repeat: no-repeat;
  background-size: 100%;
`;
