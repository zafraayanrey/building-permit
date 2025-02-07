import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import RightContent from "./components/RightContent";
import { RadioContext } from "./api/radio";

const Wrapper = styled.div`
  margin: auto;
  width: 1440px;
  height: 100dvh;
  background-color: var(--container);
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

function App() {
  const [corpAdd, setCorpAdd] = useState(false);
  const [authRepAdd, setAuthRepAdd] = useState(false);
  const [proInfoAdd, setProInfoAdd] = useState(false);

  return (
    <RadioContext.Provider
      value={{
        corpAdd,
        authRepAdd,
        proInfoAdd,
        setCorpAdd,
        setAuthRepAdd,
        setProInfoAdd,
      }}
    >
      <Wrapper>
        <Sidebar />
        <RightContent />
      </Wrapper>
    </RadioContext.Provider>
  );
}

export default App;
