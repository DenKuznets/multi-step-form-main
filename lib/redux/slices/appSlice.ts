import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
    AddonsStep,
    PersonalInfoStep,
    SelectPlanStep,
    SummaryStep
} from '@/lib/types';

export enum Steps {
    personalInfo,
    selectPlan,
    addons,
    summary
}

export const PLANS = {
    ARCADE: 'arcade',
    ADVANCED: 'advanced',
    PRO: 'pro'
};

export const SUBSCRIBTION = {
    MONTHLY: 'monthly',
    YEARLY: 'yearly'
};

type stepsType = PersonalInfoStep | SelectPlanStep | AddonsStep | SummaryStep;

// Define a type for the slice state
interface AppState {
    currentStepIndex: number;
    steps: stepsType[];
}

// Define the initial state using that type
export const initialState: AppState = {
    currentStepIndex: Steps.personalInfo,
    steps: [
        {
            name: 'personal info',
            valid: false,
            dirty: true,
            value: {
                name: '',
                email: '',
                phone: ''
            }
        },
        {
            name: 'SELECT PLAN',
            valid: false,
            dirty: false,
            value: {
                plan: PLANS.ARCADE,
                subscribtion: SUBSCRIBTION.MONTHLY
            }
        },
        {
            name: 'ADD-ONS',
            valid: false,
            dirty: true,
            value: {
                customProfile: false,
                largerStorage: false,
                onlineService: false
            }
        },
        {
            name: 'SUMMARY',
            valid: false,
            dirty: false
        }
    ]
};

export const appSlice = createSlice({
    name: 'app',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            // state.valu
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // state.value += action.payload;
        }
    }
});

export const { increment, incrementByAmount } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentStepIndex = (state: RootState) =>
    state.app.currentStepIndex;
export const selectCurrentStep = (state: RootState) =>
    state.app.steps[state.app.currentStepIndex - 1];
export const selectSteps = (state: RootState) => state.app.steps;
export const selectStep1 = (state: RootState) => state.app.steps[0];

export default appSlice.reducer;
