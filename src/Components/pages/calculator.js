import React, { useState } from 'react';
import Button from '../Button';
import '../style/ButtonStyles.css';
import calculate from '../../logicOfCalculator/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    setCalculatorState(newState);
  };

  return (
    <div className="container">
      <div className="header">{calculatorState.next || calculatorState.total || '0'}</div>
      <Button className="button" label="AC" onClick={handleClick} />
      <Button className="button" label="+/-" onClick={handleClick} />
      <Button className="button" label="%" onClick={handleClick} />
      <Button className="button operator" label="/" onClick={() => handleClick('÷')} />
      <Button className="button" label="7" onClick={handleClick} />
      <Button className="button" label="8" onClick={handleClick} />
      <Button className="button" label="9" onClick={handleClick} />
      <Button className="button operator" label="x" onClick={handleClick} />
      <Button className="button" label="4" onClick={handleClick} />
      <Button className="button" label="5" onClick={handleClick} />
      <Button className="button" label="6" onClick={handleClick} />
      <Button className="button operator" label="-" onClick={handleClick} />
      <Button className="button" label="1" onClick={handleClick} />
      <Button className="button" label="2" onClick={handleClick} />
      <Button className="button" label="3" onClick={handleClick} />
      <Button className="button operator" label="+" onClick={handleClick} />
      <Button className="button zero" label="0" onClick={handleClick} />
      <Button className="button" label="." onClick={handleClick} />
      <Button className="button operator" label="=" onClick={handleClick} />
    </div>
  );
}

export default Calculator;
