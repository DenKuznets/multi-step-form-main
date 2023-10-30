import PlanCard from './PlanCard/PlanCard';

const Step2 = () => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <PlanCard
                    imgUrl="./images/icon-arcade.svg"
                    planName="Arcade"
                    planInfo="$9/mo"
                />
                <PlanCard
                    imgUrl="./images/icon-advanced.svg"
                    planName="Advanced"
                    planInfo="$12/mo"
                />
                <PlanCard
                    imgUrl="./images/icon-pro.svg"
                    planName="Pro"
                    planInfo="$15/mo"
                />
            </div>
            <div className="rounded-md bg-alabaster ">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Remember me</span>
                        <input type="checkbox" className="toggle" checked />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Step2;
