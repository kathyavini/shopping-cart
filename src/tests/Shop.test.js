import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Shop } from '../pages/Shop';

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

describe('Shop page', () => {
  const mockSetCart = jest.fn();
  test('It renders the item titles', () => {
    render(<Shop cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const firstTitle = screen.getByRole('heading', { name: 'Mock Tea 1' });
    const secondTitle = screen.getByRole('heading', { name: 'Mock Tea 2' });

    expect(firstTitle).toBeInTheDocument();
    expect(secondTitle).toBeInTheDocument();
  });

  test('It renders the add to cart button', () => {
    const mockSetCart = jest.fn();
    render(<Shop cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const addToCartBtns = screen.getAllByRole('button', {
      name: 'Add to Cart',
    });

    expect(addToCartBtns[0]).toBeInTheDocument();
  });

  test('Add to cart button calls setCart function with the correct cart item added', () => {
    const mockSetCart = jest.fn();
    render(<Shop cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const addToCartBtns = screen.getAllByRole('button', {
      name: 'Add to Cart',
    });

    userEvent.click(addToCartBtns[1]);
    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: 1,
        qty: 2,
      },
      {
        id: 2,
        qty: 1,
      },
    ]);
  });

  test('Add to cart button calls setCart function with the correct cart item incremented by 1', () => {
    const mockSetCart = jest.fn();
    render(<Shop cart={mockCart} items={mockItems} setCart={mockSetCart} />, {
      wrapper: MemoryRouter,
    });

    const addToCartBtns = screen.getAllByRole('button', {
      name: 'Add to Cart',
    });

    userEvent.click(addToCartBtns[0]);

    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: 1,
        qty: 3,
      },
    ]);
  });
});
