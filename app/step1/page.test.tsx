import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Step1 from './page';

test('renders correctly', () => {
    render(<Step1 />);

    const h1 = screen.getByRole('heading', { level: 1 });
    const info = screen.getByText(
        'Please provide your name, email address, and phone number.'
    );
    const form = screen.getByRole('form')
    
    expect(h1).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(form).toBeInTheDocument();
});

// test('renders Home unchanged', () => {
//     const { container } = render(<Home />);
//     expect(container).toMatchSnapshot();
// });
