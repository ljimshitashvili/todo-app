import { styled } from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  light: boolean;
  path: string;
}

export default function ControlPanel({ light, path }: Props) {
  return (
    <Container light={light} path={path}>
      <Link className="all" to="/">
        All
      </Link>
      <Link className="active" to="active">
        Active
      </Link>
      <Link className="completed" to="completed">
        Completed
      </Link>
    </Container>
  );
}

const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 17px;
  justify-content: center;
  gap: 19px;
  background-color: ${(p) => (p.light ? "#fff" : "#25273D")};
  border-radius: 5px;
  margin-top: 16px;
  box-shadow: 0px 35px 50px -15px #c2c3d680;
  width: 327px;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
  }

  .all {
    color: ${(p) => (p.path === "/" ? "#3A7CFD" : "#9495A5")};
  }

  .active {
    color: ${(p) => (p.path === "/active" ? "#3A7CFD" : "#9495A5")};
  }

  .completed {
    color: ${(p) => (p.path === "/completed" ? "#3A7CFD" : "#9495A5")};
  }

  @media (min-width: 1024px) {
    padding: 0;
    gap: 19px;
    background-color: transparent;
    margin-top: 0;
    box-shadow: none;
    width: fit-content;
    position: relative;
    top: -29px;

    a {
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.194444px;
      color: #9495a5;
    }
  }
`;
