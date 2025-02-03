import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import RightContent from "./components/RightContent";

const Wrapper = styled.div`
  margin: auto;
  width: 1440px;
  height: 100dvh;
  background-color: var(--container);
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Sidebar />
      <RightContent />
    </Wrapper>
  );
}

export default App;
