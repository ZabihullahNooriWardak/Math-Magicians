import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Components/pages/Home';

test('render correctly', () => {
  const homeComponent = render(<Home />);
  expect(homeComponent).toMatchSnapshot();
});
