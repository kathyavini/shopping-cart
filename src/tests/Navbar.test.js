import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Navbar } from './Navbar';

test('It renders shop and home links', () => {
  render(<Navbar />);

  const links = screen.getAllByRole('listitem');

  expect(links[0].textContent).toMatch(/Home/i);
});
