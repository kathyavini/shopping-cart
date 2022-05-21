import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import RouteSwitch from '../pages/RouteSwitch';

test.skip('Routing', () => {
  render(<RouteSwitch />, {
    wrapper: MemoryRouter,
  });
});
