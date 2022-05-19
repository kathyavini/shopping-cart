import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test.skip('Renders shop title on load', () => {
  render(<App />);
  const heading = screen.getByRole('heading');

  expect(heading.textContent).toMatch(/ultrawild/i);
});
