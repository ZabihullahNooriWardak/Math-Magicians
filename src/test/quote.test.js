import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Components/pages/quote';

describe('Quotes', () => {
  test('render quote component correctly', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
  test('does this display loading massege while loading ', () => {
    const quote = render(<Quote />);
    const loading = quote.getByText('Quote is loading wait for some moments');
    expect(loading).toBeInTheDocument();
  });
});
