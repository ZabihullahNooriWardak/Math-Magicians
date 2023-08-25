import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Components/pages/Home';

test('render correctly', () => {
  const homeComponent = render(<Home />);
  expect(homeComponent).toMatchSnapshot();
});

test('renders welcome message', () => {
  const { getByText } = render(<Home />);
  const welcomeMessage = getByText('Welcome to MathMagicians');
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders paragraphs', () => {
  const { getAllByText } = render(<Home />);
  const paragraphs = getAllByText((content, element) => element.tagName.toLowerCase() === 'p');
  expect(paragraphs).toHaveLength(5);
});

test('renders specific content', () => {
  const { getByText } = render(<Home />);
  const specificContent = getByText(/Step into the captivating realm of Math Magician/);
  expect(specificContent).toBeInTheDocument();
});
