// Math Project - A Simple Web Application
import React from 'react';

const mathProject = () => {
  const [result, setResult] = useState('');
  const [equation, setEquation] = useState('');

  const calculateResult = (e: any) => {
    e.preventDefault();
    let equation = document.getElementById('input-box').value;
    if (!equation) return;
    let result = eval(equation);
    setResult(result);
  };

  return (
    <div className="container">
      <h1>Math Project</h1>
      <form onSubmit={calculateResult}>
        <input type="text" id="input-box" placeholder="Enter a math equation" />
        <button type="submit">Calculate</button>
      </form>
      <div className="result">{result}</div>
    </div>
  );
};
