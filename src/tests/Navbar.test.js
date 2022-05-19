import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';
import { Navbar } from '../components/Navbar';

const mockCart = [
  {
    id: 1,
    qty: 2,
  },
];

describe('Navigation bar', () => {
  test('Home and Shop Links Displayed', () => {
    render(<Navbar cart={mockCart} />, { wrapper: MemoryRouter });

    const homeLink = screen.getByRole('link', { name: /home/i });
    const shopLink = screen.getByRole('link', { name: /^shop$/i });

    // verify page content for expected route
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
  });

  test('Cart badge shows number of items in cart', () => {
    render(<Navbar cart={mockCart} />, { wrapper: MemoryRouter });

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('Cart badge shows 0 when cart is empty array', () => {
    const mockCartEmpty = [];

    render(<Navbar cart={mockCartEmpty} />, { wrapper: MemoryRouter });

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
