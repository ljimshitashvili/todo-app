import { styled } from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  light: boolean;
}

export default function ControlPanel({ light }: Props) {
  return (
    <Container light={light}>
      <Link to="/">All</Link>
      <Link to="active">Active</Link>
      <Link to="completed">Completed</Link>
    </Container>
  );
}

const Container = styled.div<{ light: boolean }>`
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
    color: #9495a5;
  }
`;
