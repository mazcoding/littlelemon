import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';

describe('BookingPage component', () => {
  it('renders the component with the form and available times', () => {
    const { getByTestId } = render(<BookingPage />);
    const form = getByTestId('booking-form');
    expect(form).toBeInTheDocument();
    const availableTimes = getByTestId('available-times');
    expect(availableTimes.textContent).toBe('18:00 19:00 21:00 22:00');
  });

  it('submits the form and redirects to confirmation page', async () => {
    const { getByTestId, getByText } = render(<BookingPage />);
    const form = getByTestId('booking-form');
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(getByTestId('confirmation-page')).toBeInTheDocument();
    });
  });
});