import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AddonsStep, PersonalInfoStep, SelectPlanStep, SummaryStep } from '@/lib/types';

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

// Define a type for the slice state
interface AppState {
    selectedIndex: number;
    steps: {
        personalInfo: PersonalInfoStep;
        selectPlan: SelectPlanStep;
        addons: AddonsStep;
        summary: SummaryStep;
    };
}

// Define the initial state using that type
const initialState: AppState = {
    selectedIndex: Steps.personalInfo,
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
        decrement: (state) => {
            // state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.app.value;

export default appSlice.reducer;
