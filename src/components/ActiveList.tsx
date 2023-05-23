import { styled } from "styled-components";
import { Task, removeTask } from "../store/AllTaskSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeCompletion } from "../store/AllTaskSlice";
import { addActiveTask, removeActiveTask } from "../store/ActiveSlice";
import { xIcon } from "../assets/todo-app-main";

interface Props {
  active: Task[];
  light: boolean;
}

export default function ActiveList({ active, light }: Props) {
  let counter = 0;
  const dispatch = useDispatch();

  const handleClearActive = () => {
    active.forEach((Task) => {
      dispatch(removeActiveTask(Task.id));
    });
  };

  return (
    <Container light={light}>
      {active.map((task, index) => {
        counter++;
        return (
          <div key={index}>
            <div className="container">
              <button
                className="circle"
                onClick={() => {
                  dispatch(changeCompletion(task.id));
                  if (active.some((active) => active.id === task.id)) {
                    dispatch(removeActiveTask(task.id));
                  } else {
                    dispatch(addActiveTask(task));
                  }
                }}
              ></button>
              <p>{task.task}</p>
              <img
                src={xIcon}
                alt="X Icon"
                onClick={() => {
                  dispatch(removeTask(task.id));
                  dispatch(removeActiveTask(task.id));
                }}
              />
            </div>
            <hr />
          </div>
        );
      })}

      <Bottom>
        <p className="left">{counter} items left</p>
        <p className="clear" onClick={handleClearActive}>
          Clear Completed
        </p>
      </Bottom>
    </Container>
  );
}

const Container = styled.div<{ light: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 327px;
  border-radius: 5px;
  background-color: ${(p) => (p.light ? "#fff" : "#25273D")};
  box-shadow: 0px 35px 50px -15px #c2c3d680;

  div {
    width: 100%;

    hr {
      width: 100%;
      height: 1px;
      border: none;
      background: ${(p) => (p.light ? "#e3e4f1" : "#393A4B")};
    }

    .container {
      width: 100%;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .circle {
        width: 20px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        border: 1px solid rgba(211, 211, 211, 0.7);
        cursor: pointer;
        background: transparent;
      }

      p {
        width: 80%;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.166667px;
        color: ${(p) => (p.light ? "#494c6b" : "#C8CBE7")};
      }

      img {
        width: 16px;
        aspect-ratio: 1/1;
        cursor: pointer;
      }
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  .left,
  .clear {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: #9495a5;
  }

  .clear {
    cursor: pointer;
  }
`;
