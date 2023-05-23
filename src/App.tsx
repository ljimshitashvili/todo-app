import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "./store/redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mobLight, mobDark } from "./assets/todo-app-main";
import { addActiveTask } from "./store/ActiveSlice";
import { Header, CreateNew, List } from "./components";
import { addTask } from "./store/AllTaskSlice";
import ControlPanel from "./components/ControlPanel";
import CompletedList from "./components/CompletedList";
import ActiveList from "./components/ActiveList";

function App() {
  const [light, setLight] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const task = useSelector((store: RootState) => store.task.tasks);
  const completed = useSelector((store: RootState) => store.complete.tasks);
  const active = useSelector((store: RootState) => store.active.tasks);

  useEffect(() => {
    if (inputValue !== "") {
      dispatch(addTask(inputValue));
      if (!task.isComplete) {
        dispatch(addActiveTask(inputValue));
      }
    }
  }, [inputValue]);

  return (
    <Container light={light}>
      <Router>
        <GlobalStyle />
        <Header light={light} setLight={setLight} />
        <CreateNew light={light} setInputValue={setInputValue} />
        <Routes>
          <Route
            path="/"
            element={
              <List
                task={task}
                light={light}
                completed={completed}
                active={active}
              />
            }
          ></Route>
          <Route
            path="active"
            element={
              <ActiveList light={light} active={active} completed={completed} />
            }
          ></Route>
          <Route
            path="completed"
            element={
              <CompletedList
                light={light}
                completed={completed}
                active={active}
              />
            }
          ></Route>
        </Routes>
        <ControlPanel light={light} />
      </Router>
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
  background-color: ${(p) => (p.light ? "#fafafa" : "#171823")};
  background-image: url(${(p) => (p.light ? mobLight : mobDark)});
  background-repeat: no-repeat;
  background-size: 100%;
`;
