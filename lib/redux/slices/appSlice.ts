import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PAYMENT } from '@/components/Step2/Step2';
import { Plans } from '@/utils/plans';

// Define a type for the slice state
interface AppState {
    name: string;
    phone: string;
    email: string;
    plan: string;
    paymentMethod: string;
    addons: string[];
    valid: boolean;
}

// Define the initial state using that type
export const initialState: AppState = {
    name: '',
    email: '',
    phone: '',
    plan: Plans[0].name,
    paymentMethod: PAYMENT.MONTHLY,
    addons: [],
    valid: false,
};

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPlan: (state, action: PayloadAction<string>) => {
            state.plan = action.payload;
        },
        togglePaymentMethod: (state) => {
            state.paymentMethod =
                state.paymentMethod === PAYMENT.MONTHLY
                    ? PAYMENT.YEARLY
                    : PAYMENT.MONTHLY;
        },
        setAddons: (state, action: PayloadAction<string[]>) => {
            state.addons = action.payload;
        },
        setValid: (state, action: PayloadAction<boolean>) => {
            state.valid = action.payload;
        },
    }
});

export const {
    setPhone,
    setEmail,
    setName,
    setPlan,
    togglePaymentMethod,
    setAddons,
    setValid
} = appSlice.actions;

export const selectName = (state: RootState) => state.app.name;
export const selectEmail = (state: RootState) => state.app.email;
export const selectPhone = (state: RootState) => state.app.phone;
export const selectPlan = (state: RootState) => state.app.plan;
export const selectValid = (state: RootState) => state.app.valid;
export const selectPaymentMethod = (state: RootState) =>
    state.app.paymentMethod;
export const selectAddons = (state: RootState) => state.app.addons;

export default appSlice.reducer;
