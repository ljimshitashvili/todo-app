import { styled } from "styled-components";

export default function ControlPanel() {
  return (
    <Container>
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 17px;
  justify-content: center;
  gap: 19px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 16px;
  box-shadow: 0px 35px 50px -15px #c2c3d680;
  width: 327px;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
    color: #9495a5;
  }
`;
