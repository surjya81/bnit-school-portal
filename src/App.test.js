import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  // Test for a specific element or refine query to avoid ambiguity
  const welcomeMessage = screen.getByText(/Welcome to BNIT Public School/i, { selector: 'h1' });
  expect(welcomeMessage).toBeInTheDocument();
});
