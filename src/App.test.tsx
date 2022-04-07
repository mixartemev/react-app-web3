import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const div = screen.getByText(/Hell/i);
  expect(div).toBeInTheDocument();
});
