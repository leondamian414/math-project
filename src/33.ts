import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid #ccc;
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={() => console.log("Input value: ", inputValue)}>Submit</Button>
      </InputContainer>
    </Container>
  );
}

export default App;
