import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Steps from './Steps';

test('renders correctly', () => {
    render(<Steps />);
    const steps = screen.getAllByRole('list-item')
    expect(steps).toHaveLength(4)
});
