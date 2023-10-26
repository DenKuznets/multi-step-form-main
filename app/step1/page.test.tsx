import '@testing-library/jest-dom';
import Step1 from './page';
import {
    renderWithProviders,
    screen,
    within
} from '@/lib/redux/utils-for-tests';

test('renders correctly', () => {
    renderWithProviders(<Step1 />);

    const h1 = screen.getByRole('heading', { level: 1 });
    const info = screen.getByText(
        'Please provide your name, email address, and phone number.'
    );
    const form = screen.getByRole('form', { name: /personal info form/i });
    const nameLabel = within(form).getByText(/name/i);
    const emailLabel = within(form).getByText(/email address/i);
    const phoneLabel = within(form).getByText(/phone number/i);
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    const phoneInput = screen.getByRole('textbox', { name: /phone number/i });
    const nextStepButton = screen.getByRole('button', {
        name: /next step/i
    });
    
    expect(h1).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(phoneLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(nextStepButton).toBeInTheDocument();
});

test('renders Home unchanged', () => {
    const { container } = renderWithProviders(<Step1 />);
    expect(container).toMatchSnapshot();
});
