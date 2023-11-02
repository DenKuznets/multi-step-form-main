import '@testing-library/jest-dom';
import {
    renderWithProviders,
    screen,
    within
} from '@/lib/redux/utils-for-tests';
import Step3 from './Step3';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

test('renders correctly', () => {
    renderWithProviders(<Step3 />);

    const form = screen.getByRole('form', { name: /select add-ons form/i });
    const addons = within(form).getAllByTestId('add-on');
    
    const backbutton = screen.getByRole('button', {
        name: /go back/i
    });
    const nextStepButton = screen.getByRole('button', {
        name: /next step/i
    });

    expect(form).toBeInTheDocument();
    expect(addons).toHaveLength(3);
    expect(backbutton).toBeInTheDocument();
    expect(nextStepButton).toBeInTheDocument();
});

test('snapshot Step3 unchanged', () => {
    const { container } = renderWithProviders(<Step3 />);
    expect(container).toMatchSnapshot();
});