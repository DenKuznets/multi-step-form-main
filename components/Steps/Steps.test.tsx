import '@testing-library/jest-dom';
import Steps from './Steps';
import { renderWithProviders, screen } from '@/lib/redux/utils-for-tests';

test('renders correctly', () => {
    renderWithProviders(<Steps />);
    const steps = screen.getAllByRole('listitem');
    expect(steps).toHaveLength(4);
});

test('renders Home unchanged', () => {
    const { container } = renderWithProviders(<Steps />);
    expect(container).toMatchSnapshot();
});