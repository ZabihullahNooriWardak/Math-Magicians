import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Components/pages/calculator';

test('render correctly', () => {
  const calculatorComponent = render(<Calculator />);
  expect(calculatorComponent).toMatchSnapshot();
});
