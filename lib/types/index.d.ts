export interface Step {
    valid: boolean;
    dirty: boolean;
}

export interface PersonalInfoStep extends Step {
    value: {
        name: string;
        email: string;
        phone: string;
    };
}

export interface SelectPlanStep extends Step {
    value: {
        plan: string;
        subscribtion: string;
    };
}

export interface AddonsStep extends Step {
    value: {
        onlineService: boolean;
        largerStorage: boolean;
        customProfile: boolean;
    };
}

export interface SummaryStep extends Step {}
