import React from "react";
import LastPeriodDatePicker from "./LastPeriodDatePicker";
import LastPeriodLongTime from "./LastPeriodLongTime";
import MenstrualCycle from "./MenstrualCycle";

const Calculator = () => {
	return (
		<div className="calculatorPart">
			<LastPeriodDatePicker />
			<LastPeriodLongTime />
			<MenstrualCycle />
		</div>
	);
};

export default Calculator;
