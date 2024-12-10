import SinglePerson from '@/components/single/SinglePerson';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Mock data for testing
const mockOwner = {
  id: String(1),
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '123 Pet Street',
};

const mockAdopter = {
  id: String(2),
  firstname: 'Jane',
  lastname: 'Smith',
  email: 'jane.smith@example.com',
  phone: '987-654-3210',
};

describe('SinglePerson Component', () => {
  it('renders an Owner correctly', () => {
    render(<SinglePerson person={mockOwner} />);

    // Check if the initials are displayed
    expect(screen.getByText('J D')).toBeTruthy();

    // Check the person's name
    expect(screen.getByText('John Doe')).toBeTruthy();

    // Check the email and phone
    expect(screen.getByText('john.doe@example.com')).toBeTruthy();
    expect(screen.getByText('123-456-7890')).toBeTruthy();

    // Check if the address is displayed for an owner
    expect(screen.getByText('123 Pet Street')).toBeTruthy();
  });

  it('renders an Adopter correctly', () => {
    render(<SinglePerson person={mockAdopter} />);

    // Check if the initials are displayed
    expect(screen.getByText('J S')).toBeTruthy();

    // Check the person's name
    expect(screen.getByText('Jane Smith')).toBeTruthy();

    // Check the email and phone
    expect(screen.getByText('jane.smith@example.com')).toBeTruthy();
    expect(screen.getByText('987-654-3210')).toBeTruthy();

    // Ensure the address is not rendered for an adopter
    expect(screen.queryByText('123 Pet Street')).toBeTruthy();
  });
});
