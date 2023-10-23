import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

test('renders correctly', () => {
    render(<Home />);
});

// test('renders Home unchanged', () => {
//     const { container } = render(<Home />);
//     expect(container).toMatchSnapshot();
// });
