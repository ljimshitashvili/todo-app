import styled from "styled-components";
import { Task } from "../store/AllTaskSlice";
import xIcon from "../assets/todo-app-main/icon-cross.svg";
import { changeCompletion } from "../store/AllTaskSlice";
import { addCompletedTask } from "../store/CompletedSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

interface Props {
  task: Task[];
}

export default function List({ task }: Props) {
  let counter = 0;
  const dispatch = useDispatch();

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
                  dispatch(addCompletedTask(task));
                }}
              ></button>
              <p>{task.task}</p>
              <img src={xIcon} alt="X Icon" />
            </div>
            <hr />
          </div>
        );
      })}
      <Bottom>
        <p className="left">{counter} items left</p>
        <p className="clear">Clear Completed</p>
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
        background-color: transparent;
        cursor: pointer;
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
`;
