import React, { useState } from "react";
import LastPeriodDatePicker from "./LastPeriodDatePicker";
import LastPeriodLongTime from "./LastPeriodLongTime";
import MenstrualCycle from "./MenstrualCycle";

const Calculator = () => {
	const [selectedTime, setSelectedTime] = useState(null);
	const [timeCount, setTimeCount] = useState(1);

	const [menstrualCycleCount, setMenstrualCycleCount] = useState(1);
	console.log(selectedTime, timeCount, menstrualCycleCount);
	return (
		<>
			<div className="calculatorPart">
				<LastPeriodDatePicker
					selectedTime={selectedTime}
					setSelectedTime={setSelectedTime}
				/>
				<LastPeriodLongTime
					timeCount={timeCount}
					setTimeCount={setTimeCount}
				/>
				<MenstrualCycle
					menstrualCycleCount={menstrualCycleCount}
					setMenstrualCycleCount={
						setMenstrualCycleCount
					}
				/>
			</div>
		</>
	);
};

export default Calculator;
