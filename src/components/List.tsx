import styled from "styled-components";
import { Task } from "../store/AllTaskSlice";
import { xIcon, checkIcon } from "../assets/todo-app-main";
import { changeCompletion, removeTask } from "../store/AllTaskSlice";
import { addCompletedTask, removeCompletedTask } from "../store/CompletedSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

interface Props {
  task: Task[];
  completed: Task[];
}

export default function List({ task, completed }: Props) {
  let counter = 0;
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    completed.forEach((Task) => {
      dispatch(removeCompletedTask(Task.id));
      dispatch(removeTask(Task.id));
    });
  };

  return (
    <Container>
      {task.map((task) => {
        counter++;
        return (
          <div key={task.id}>
            <div className="container">
              <button
                className="circle"
                onClick={() => {
                  dispatch(changeCompletion(task.id));
                  if (completed.some((completed) => completed.id === task.id)) {
                    dispatch(removeCompletedTask(task.id));
                  } else {
                    dispatch(addCompletedTask(task));
                  }
                }}
                style={{
                  background: task.isComplete
                    ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
                    : "transparent",
                }}
              >
                <img src={checkIcon} alt="" />
              </button>
              <p
                style={{
                  textDecoration: task.isComplete ? "line-through" : "none",
                  opacity: task.isComplete ? "0.5" : "1",
                }}
              >
                {task.task}
              </p>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 327px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 35px 50px -15px #c2c3d680;

  div {
    width: 100%;

    hr {
      width: 100%;
      height: 1px;
      border: none;
      background: #e3e4f1;
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
        color: #494c6b;
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
