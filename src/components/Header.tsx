import styled from "styled-components";
import { TODO, Moon, Sun } from "../assets/todo-app-main";

interface Props {
  light: boolean;
  setLight: (light: boolean) => void;
}

export default function Header({ light, setLight }: Props) {
  const handleClick = () => {
    setLight(!light);
  };

  return (
    <Container light={light}>
      <img src={TODO} alt="Logo" />
      <div onClick={() => handleClick()}>
        <img className="sun" src={Sun} alt="Sun icon" />
        <img className="moon" src={Moon} alt="Moon icon" />
      </div>
    </Container>
  );
}

const Container = styled.div<{ light: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 48px 25px 40px 25px;
  max-width: 375px;

  div {
    cursor: pointer;
    .sun {
      display: ${(p) => (p.light ? "block" : "none")};
    }

    .moon {
      display: ${(p) => (!p.light ? "block" : "none")};
    }
  }
`;
