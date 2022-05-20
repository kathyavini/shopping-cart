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
    price: '12.50',
    id: 2,
  },
];

describe('Cart page', () => {
  test('It renders the correct item and quantity', () => {
    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const firstTitle = screen.getByRole('heading', { name: 'Mock Tea 1' });
    const quantity = screen.getByLabelText('quantity');

    expect(firstTitle).toBeInTheDocument();
    expect(quantity.textContent).toBe('2');
  });

  test('Increment button increases quantity by one', () => {
    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const increment = screen.getByRole('button', { name: '+' });

    userEvent.click(increment);

    // Note this does't work without a real setCart
    // const quantity = screen.getByLabelText('quantity');
    // expect(quantity.textContent).toBe('3');

    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: 1,
        qty: 3,
      },
    ]);
  });

  test('Decrement button decreases quantity by one', () => {
    const mockCart = [
      {
        id: 1,
        qty: 2,
      },
    ];

    // Redefined here because for reasons that are completely beyond me, the mock cart is getting incremented! On this second call the cart has a quantity increased by 1, even though I passed a dud (mock) setCart. I had this issue with my shop mocks as well. What the heck??

    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    // Note this isn't a hyphen but a minus from toptal
    const decrement = screen.getByRole('button', { name: '−' });

    userEvent.click(decrement);

    // Note this does't work without a real setCart
    // const quantity = screen.getByLabelText('quantity');
    // expect(quantity.textContent).toBe('1');

    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: 1,
        qty: 1,
      },
    ]);
  });

  test('Decrement button removes item from cart', () => {
    const mockCart = [
      {
        id: 1,
        qty: 2,
      },
    ];
    // See note above on this re-declaration of mockCart

    const mockSetCart = jest.fn();
    render(<Cart cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    // Note this isn't a hyphen but a minus from toptal
    const decrement = screen.getByRole('button', { name: '−' });

    userEvent.click(decrement);
    userEvent.click(decrement);

    expect(mockSetCart).toHaveBeenCalledWith([]);
  });

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
});
