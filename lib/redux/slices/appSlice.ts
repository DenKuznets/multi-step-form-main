import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PAYMENT, Plans } from '@/utils/steps';
// import {
//     AddonsStep,
//     PersonalInfoStep,
//     SelectPlanStep,
//     SummaryStep
// } from '@/lib/types';
// import { PLANS, SUBSCRIBTION } from '@/utils/steps';

// type stepsType = PersonalInfoStep | SelectPlanStep | AddonsStep | SummaryStep;

export interface Addons {
    online: boolean;
    storage: boolean;
    customize: boolean;
}

// Define a type for the slice state
interface AppState {
    // currentStepIndex: number;
    name: string;
    phone: string;
    email: string;
    plan: string;
    paymentMethod: string;
    addons: Addons;
    // steps: stepsType[];
}

// Define the initial state using that type
export const initialState: AppState = {
    // currentStepIndex: 0,
    name: 'den',
    email: 'den@mail.ru',
    phone: '123456789',
    plan: Plans[2].name,
    paymentMethod: PAYMENT.YEARLY,
    addons: {
        online: false,
        storage: true,
        customize: true
    }
    // steps: [
    //     {
    //         valid: false,
    //         dirty: true,
    //         value: {
    //             name: '',
    //             email: '',
    //             phone: ''
    //         }
    //     },
    //     {
    //         valid: false,
    //         dirty: false,
    //         value: {
    //             plan: PLANS.ARCADE,
    //             subscribtion: SUBSCRIBTION.MONTHLY
    //         }
    //     },
    //     {
    //         valid: false,
    //         dirty: true,
    //         value: {
    //             customProfile: false,
    //             largerStorage: false,
    //             onlineService: false
    //         }
    //     },
    //     {
    //         valid: false,
    //         dirty: false
    //     }
    // ]
};

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // setName: (state) => {
        //     // state.valu
        //     state.name =
        // },
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
        setAddons: (state, action: PayloadAction<Addons>) => {
            state.addons = action.payload;
        }
    }
});

export const {
    setPhone,
    setEmail,
    setName,
    setPlan,
    togglePaymentMethod,
    setAddons
} = appSlice.actions;

export const selectName = (state: RootState) => state.app.name;
export const selectEmail = (state: RootState) => state.app.email;
export const selectPhone = (state: RootState) => state.app.phone;
export const selectPlan = (state: RootState) => state.app.plan;
export const selectPaymentMethod = (state: RootState) =>
    state.app.paymentMethod;
export const selectAddons = (state: RootState) => state.app.addons;
// Other code such as selectors can use the imported `RootState` type
// export const selectCurrentStepIndex = (state: RootState) =>
//     state.app.currentStepIndex;
// export const selectCurrentStep = (state: RootState) =>
//     state.app.steps[state.app.currentStepIndex - 1];
// export const selectSteps = (state: RootState) => state.app.steps;
// export const selectStep1 = (state: RootState) => state.app.steps[0];

export default appSlice.reducer;
