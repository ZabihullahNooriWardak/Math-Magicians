import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Components/Button';

test('render correctly', () => {
  const button = render(<Button />);
  expect(button).toMatchSnapshot();
});
