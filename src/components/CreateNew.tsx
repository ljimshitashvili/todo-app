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
      <div className="circle"></div>
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

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid grey;
  }

  input {
    border: none;
    width: 88%;
    outline: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: #393a4b;
    background-color: transparent;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: #9495a5;
  }
`;
