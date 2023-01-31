import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import BookingForm from './BookingForm';

afterEach(cleanup);

describe('BookingForm component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<BookingForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('updates first name when input changes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const firstNameInput = getByLabelText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });

  it('shows error message for first name when input is left blank', () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const firstNameInput = getByLabelText('First Name');
    fireEvent.blur(firstNameInput);
    expect(getByText('Name is required.')).toBeInTheDocument();
  });

  it('updates last name when input changes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const lastNameInput = getByLabelText('Last Name');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
  });

  it('shows error message for last name when input is left blank', () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const lastNameInput = getByLabelText('Last Name');
    fireEvent.blur(lastNameInput);
    expect(getByText('Name is required.')).toBeInTheDocument();
  });

  it('updates email when input changes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'john.doe@gmail.com' } });
    expect(emailInput.value).toBe('john.doe@gmail.com');
  });

  it('shows error message for invalid email format', () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.blur(emailInput);
    expect(getByText('Email is invalid.')).toBeInTheDocument();
  });

  it('shows error message for email when input is left blank', () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const emailInput = getByLabelText('Email');
    fireEvent.blur(emailInput);
    expect(getByText('Email is required.')).toBeInTheDocument();
  });
})