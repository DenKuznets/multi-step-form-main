import '@testing-library/jest-dom';
import { renderWithProviders, screen } from '@/lib/redux/utils-for-tests';
import Step4 from './Step4';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

test('renders correctly', () => {
    renderWithProviders(<Step4 />);

    const form = screen.getByRole('form', { name: /select summary form/i });

    const backbutton = screen.getByRole('button', {
        name: /go back/i
    });
    const confirmBtn = screen.getByRole('button', {
        name: /confirm/i
    });

    expect(form).toBeInTheDocument();
    expect(backbutton).toBeInTheDocument();
    expect(confirmBtn).toBeInTheDocument();
});

test('snapshot Step4 unchanged', () => {
    const { container } = renderWithProviders(<Step4 />);
    expect(container).toMatchSnapshot();
});
