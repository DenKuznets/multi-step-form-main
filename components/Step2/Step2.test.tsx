import '@testing-library/jest-dom';
import {
    renderWithProviders,
    screen,
    within
} from '@/lib/redux/utils-for-tests';
import Step2 from './Step2';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));

test('renders correctly', () => {
    renderWithProviders(<Step2 />);

    const form = screen.getByRole('form', { name: /select plan form/i });
    const planCards = within(form).getAllByTestId('plan-card');
    const paymentSwitch = within(form).getByTestId('payment-switch');
    const backbutton = screen.getByRole('button', {
        name: /go back/i
    });
    const nextStepButton = screen.getByRole('button', {
        name: /next step/i
    });

    expect(form).toBeInTheDocument();
    expect(planCards).toHaveLength(3);
    expect(paymentSwitch).toBeInTheDocument();
    expect(backbutton).toBeInTheDocument();
    expect(nextStepButton).toBeInTheDocument();
});

test('renders Step2 unchanged', () => {
    const { container } = renderWithProviders(<Step2 />);
    expect(container).toMatchSnapshot();
});

test('pressing payment switch should change plan price from month to year and back', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Step2 />);
    const arcadePlanPrice = screen.getByText(/\$9\/mo/i);
    expect(arcadePlanPrice).toHaveTextContent('$9/mo');
    const toggle = screen.getByTestId('payment-switch-toggle');
    await user.click(toggle);
    expect(arcadePlanPrice).toHaveTextContent('$90/yr');
    await user.click(toggle);
    expect(arcadePlanPrice).toHaveTextContent('$9/mo');
});
