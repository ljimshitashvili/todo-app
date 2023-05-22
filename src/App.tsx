import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "./store/redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import {
  desktopLight,
  desktopDark,
  mobLight,
  mobDark,
} from "./assets/todo-app-main";

import { Header, CreateNew, List } from "./components";
import { addTask } from "./store/AllTaskSlice";

function App() {
  const [light, setLight] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);
  const dispatch = useDispatch();
  const task = useSelector((store: RootState) => store.task.tasks);

  useEffect(() => {
    if (inputValue !== "") {
      dispatch(addTask(inputValue));
    }
    console.log(task);
  }, [inputValue]);

  return (
    <Container light={light}>
      <GlobalStyle />
      <Header light={light} setLight={setLight} />
      <CreateNew light={light} setInputValue={setInputValue} />
      <List task={task} />
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
  background-color: #fafafa;
  background-image: url(${(p) => (p.light ? mobLight : mobDark)});
  background-repeat: no-repeat;
  background-size: 100%;
`;
