/* eslint-disable react/prop-types */
import React from 'react';
import './style/ButtonStyles.css';

function Calculator() {
  return (
    <div className="container">
      <div className="header">0</div>
      <Button className="button" label="AC" />
      <Button className="button" label="+/-" />
      <Button className="button" label="%" />
      <Button className="button" label="/" />
      <Button className="button" label="7" />
      <Button className="button" label="8" />
      <Button className="button" label="9" />
      <Button className="button operator" label="x" />
      <Button className="button" label="4" />
      <Button className="button" label="5" />
      <Button className="button" label="6" />
      <Button className="button operator" label="-" />
      <Button className="button" label="1" />
      <Button className="button" label="2" />
      <Button className="button" label="3" />
      <Button className="button operator" label="+" />
      <Button className="button zero" label="0" />
      <Button className="button" label="." />
      <Button className="button operator" label="=" />
    </div>
  );
}

function Button({ className, label }) {
  return (
    <button className={className} type="button">
      {label}
    </button>
  );
}

export default Calculator;
