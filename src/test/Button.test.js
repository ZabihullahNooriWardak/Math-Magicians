import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Components/Button';

test('render correctly', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button className="test-class" label="Test Label" onClick={onClickMock} />,
  );

  const buttonElement = getByText('Test Label');
  expect(buttonElement).toBeInTheDocument();

  buttonElement.click();
  expect(onClickMock).toHaveBeenCalledWith('Test Label');
});
