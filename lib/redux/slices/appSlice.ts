import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AddonsStep, PersonalInfoStep, SelectPlanStep, SummaryStep } from '@/lib/types';

export enum Steps {
    personalInfo = 1,
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

// Define a type for the slice state
interface AppState {
    currentStep: number;
    steps: {
        personalInfo: PersonalInfoStep;
        selectPlan: SelectPlanStep;
        addons: AddonsStep;
        summary: SummaryStep;
    };
}

// Define the initial state using that type
const initialState: AppState = {
    currentStep: Steps.personalInfo,
    steps: {
        personalInfo: {
            valid: false,
            dirty: true,
            value: {
                name: '',
                email: '',
                phone: ''
            }
        },
        selectPlan: {
            valid: false,
            dirty: false,
            value: {
                plan: PLANS.ARCADE,
                subscribtion: SUBSCRIBTION.MONTHLY
            }
        },
        addons: {
            valid: false,
            dirty: true,
            value: {
                cuustomProfile: false,
                largerStorage: false,
                onlineService: false
            }
        },
        summary: {
            valid: false,
            dirty: false
        }
    }
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
export const selectCurrentStep = (state: RootState) => state.app.currentStep;

export default appSlice.reducer;
