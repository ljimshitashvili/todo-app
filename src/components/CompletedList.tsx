import { styled } from "styled-components";
import { Task, removeTask } from "../store/AllTaskSlice";
import { useDispatch } from "react-redux";
import { changeCompletion } from "../store/AllTaskSlice";
import { addCompletedTask, removeCompletedTask } from "../store/CompletedSlice";
import { addActiveTask, removeActiveTask } from "../store/ActiveSlice";
import { useLocation } from "react-router-dom";
import { xIcon, checkIcon } from "../assets/todo-app-main";
import { useEffect } from "react";

interface Props {
  completed: Task[];
  light: boolean;
  active: Task[];
  setpath: (path: string) => void;
}

export default function CompletedList({
  completed,
  light,
  active,
  setpath,
}: Props) {
  const location = useLocation().pathname;
  useEffect(() => {
    setpath(location);
  }, []);
  let counter = 0;
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    completed.forEach((Task) => {
      dispatch(removeCompletedTask(Task.id));
    });
  };

  return (
    <Container light={light}>
      {completed.map((task) => {
        counter++;
        return (
          <div key={task.id}>
            <div className="container">
              <button
                className="circle"
                onClick={() => {
                  if (task.isComplete) {
                    if (
                      completed.some((completed) => completed.id === task.id)
                    ) {
                      dispatch(addCompletedTask(task.id));
                    }
                    if (
                      active.some((activeTask) => activeTask.id === task.id)
                    ) {
                      dispatch(removeActiveTask(task.id));
                    }
                  } else {
                    dispatch(removeCompletedTask(task.id));
                    dispatch(addActiveTask(task.task));
                  }
                  dispatch(changeCompletion(task.id));
                }}
              >
                <img src={checkIcon} alt="" />
              </button>
              <p>{task.task}</p>
              <img
                src={xIcon}
                alt="X Icon"
                onClick={() => {
                  dispatch(removeTask(task.id));
                  dispatch(removeCompletedTask(task.id));
                }}
              />
            </div>
            <hr />
          </div>
        );
      })}

      <Bottom>
        <p className="left">{counter} items left</p>
        <p className="clear" onClick={handleClearCompleted}>
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
        background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);

        img {
          height: 5px;
          width: 7.25px;
        }
      }

      p {
        width: 80%;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.166667px;
        color: ${(p) => (p.light ? "#494c6b" : "#C8CBE7")};
        text-decoration: line-through;
        opacity: 0.5;
      }

      img {
        width: 16px;
        aspect-ratio: 1/1;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 540px;
    box-shadow: ${(p) =>
      p.light
        ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
        : "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"};
    div {
      .container {
        padding: 24px 20px;

        .circle {
          width: 24px;
        }

        p {
          font-size: 18px;
          line-height: 18px;
          letter-spacing: -0.25px;
        }

        img {
          width: 24px;
        }
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

  @media (min-width: 1024px) {
    padding: 16px 24px;

    .left,
    .clear {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.19px;
    }
  }
`;
