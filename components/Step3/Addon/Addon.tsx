const Addon = () => {
    return (
        <label htmlFor="online">
            <input type="checkbox" name="online" id="online" />
            <div>
                <div>
                    <div className="font-bold text-marineBlue">Online service</div>
                    <div className="text-coolGray">Access to multiplayer games</div>
                </div>
            </div>
        </label>
    );
};

export default Addon;
