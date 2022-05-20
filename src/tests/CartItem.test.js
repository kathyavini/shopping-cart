import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { CartItem } from '../components/CartItem';

const mockCart = [
  {
    id: 1,
    qty: 2,
  },
];

const targetItem = {
  name: 'Mock Tea 1',
  image: 'image-url',
  imageAlt: 'image2-url',
  description: 'Some words about mock tea 1',
  price: '12.50',
  id: 1,
};

describe('CartItem component', () => {
  test('It renders the correct item and quantity', () => {
    const mockSetCart = jest.fn();
    render(
      <CartItem
        cart={mockCart}
        targetItem={targetItem}
        setCart={mockSetCart}
        quantity={2}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    const firstTitle = screen.getByRole('heading', { name: 'Mock Tea 1' });
    const quantity = screen.getByLabelText('quantity');

    expect(firstTitle).toBeInTheDocument();
    expect(quantity.textContent).toBe('2');
  });

  test('It calculates item price and formats it correctly', () => {
    const mockSetCart = jest.fn();
    render(
      <CartItem
        cart={mockCart}
        targetItem={targetItem}
        setCart={mockSetCart}
        quantity={2}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    const itemPrice = screen.getByLabelText('item-total');

    expect(itemPrice.textContent).toBe('$25.00 CAD');
  });

  test('Increment button increases quantity by one', () => {
    const mockSetCart = jest.fn();
    render(
      <CartItem
        cart={mockCart}
        targetItem={targetItem}
        setCart={mockSetCart}
        quantity={2}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

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
    render(
      <CartItem
        cart={mockCart}
        targetItem={targetItem}
        setCart={mockSetCart}
        quantity={2}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

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
    render(
      <CartItem
        cart={mockCart}
        targetItem={targetItem}
        setCart={mockSetCart}
        quantity={2}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    // Note this isn't a hyphen but a minus from toptal
    const decrement = screen.getByRole('button', { name: '−' });

    userEvent.click(decrement);
    userEvent.click(decrement);

    expect(mockSetCart).toHaveBeenCalledWith([]);
  });

  test('Close button removes item from cart', () => {
    const mockCart = [
      {
        id: 1,
        qty: 2,
      },
    ];
    // See note above on this re-declaration of mockCart

    const mockSetCart = jest.fn();
    render(
      <CartItem
        cart={mockCart}
        targetItem={targetItem}
        setCart={mockSetCart}
        quantity={2}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    // Note this isn't a hyphen but a minus from toptal
    const close = screen.getByLabelText('close');

    userEvent.click(close);

    expect(mockSetCart).toHaveBeenCalledWith([]);
  });
});
