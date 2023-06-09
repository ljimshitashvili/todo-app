import styled from "styled-components";

interface Props {
  light: boolean;
  setInputValue: (inputValue: string) => void;
}

export default function CreateNew({ light, setInputValue }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue(e.currentTarget.input.value);
  };

  return (
    <Container light={light} onSubmit={handleSubmit}>
      <button className="circle" type="submit"></button>
      <input type="text" name="input" placeholder="Create a new todo..." />
    </Container>
  );
}

const Container = styled.form<{ light: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 327px;
  background-color: ${(p) => (p.light ? "#fff" : "#25273D")};
  padding: 14px 20px;
  border-radius: 5px;
  gap: 12px;
  margin-bottom: 16px;

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(211, 211, 211, 0.7);
    background-color: transparent;
    cursor: pointer;
  }

  input {
    border: none;
    width: 88%;
    outline: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: ${(p) => (p.light ? "#393a4b" : "#C8CBE7")};
    background-color: transparent;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: ${(p) => (p.light ? "#9495a5" : "#767992")};
  }

  @media (min-width: 1024px) {
    max-width: 540px;
    padding: 20px 22px;
    gap: 24px;
    margin-bottom: 24px;

    .circle {
      width: 24px;
      height: 24px;
    }

    input {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
    }

    input::placeholder {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
    }
  }
`;
