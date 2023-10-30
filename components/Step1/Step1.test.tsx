import '@testing-library/jest-dom';
// import Step1 from '../../app/[stepName]/page';
import {
    renderWithProviders,
    screen,
    within
} from '@/lib/redux/utils-for-tests';
import userEvent from '@testing-library/user-event';
import { initialState } from '@/lib/redux/slices/appSlice';
import { produce } from 'immer';
import { PersonalInfoStep } from '@/lib/types';
import Step1 from './Step1';

test('renders correctly', () => {
    renderWithProviders(
        <Step1 />
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

    expect(form).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(phoneLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(nextStepButton).toBeInTheDocument();
});

test('required message pops up at empty required fields when submit button clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Step1 />);
    const nextStepButton = screen.getByRole('button', {
        name: /next step/i
    });
    await user.click(nextStepButton);
    const requiredMessages = screen.getAllByText('This field is required');
    expect(requiredMessages).toHaveLength(3);
});

test('invalid email message pops up at incorrectly filled email field when submit button clicked', async () => {
    const user = userEvent.setup();
    const newState = produce(initialState, (drafState) => {
        const step = drafState.steps[0] as PersonalInfoStep;
        step.value.email = 'asdas';
    });

    renderWithProviders(<Step1 />, {
        preloadedState: {
            app: {
                ...newState
            }
        }
    });
    const nextStepButton = screen.getByRole('button', {
        name: /next step/i
    });
    await user.click(nextStepButton);
    const requiredMessages = screen.getByText('Invalid email');
    expect(requiredMessages).toBeInTheDocument();
});

test('renders Step1 unchanged', () => {
    const { container } = renderWithProviders(<Step1 />);
    expect(container).toMatchSnapshot();
});