import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Cart } from '../pages/Cart';

const mockCart = [
  {
    id: 1,
    qty: 2,
  },
];

const mockItems = [
  {
    name: 'Mock Tea 1',
    image: 'image-url',
    imageAlt: 'image2-url',
    description: 'Some words about mock tea 1',
    price: '12.50',
    id: 1,
  },
  {
    name: 'Mock Tea 2',
    image: 'image-url',
    imageAlt: 'image2-url',
    description: 'Some words about mock tea 2',
    price: '14.50',
    id: 2,
  },
];

describe('Cart page', () => {
  test('Shows empty cart message', () => {
    const mockCart = [];
    const mockSetCart = jest.fn();

    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const message = screen.getByText('There are no items in your cart');
    const shoppingButton = screen.getByRole('button', {
      name: 'Shop for items',
    });

    expect(message).toBeInTheDocument();
    expect(shoppingButton).toBeInTheDocument();
  });

  test('Cart title reflects number of items in cart', () => {
    const mockCart = [
      {
        id: 1,
        qty: 2,
      },
    ];
    const mockSetCart = jest.fn();

    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const count = screen.getByLabelText('item-count');

    expect(count.textContent).toBe('2 ITEM(S)');
  });

  test('It calculates cart total and formats it correctly', () => {
    const mockCart = [
      {
        id: 1,
        qty: 2,
      },
      {
        id: 2,
        qty: 2,
      },
    ];
    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const cartTotal = screen.getByLabelText('cart-total');

    expect(cartTotal.textContent).toBe('$54.00 CAD');
  });

  test('It shows the correct amount left to get free shipping', () => {
    const mockCart = [
      {
        id: 1,
        qty: 2,
      },
    ];
    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const freeShipping = screen.getByLabelText('free-shipping');

    expect(freeShipping.textContent).toBe(
      'You are only $25.00 away from Free Domestic Shipping!'
    );
  });

  test('It shows when free shipping is reached', () => {
    const mockCart = [
      {
        id: 1,
        qty: 5,
      },
    ];
    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const freeShipping = screen.getByLabelText('free-shipping');

    expect(freeShipping.textContent).toBe(
      'Your order qualifies for Free Domestic Shipping!'
    );
  });
});
