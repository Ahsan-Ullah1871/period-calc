import React, { useState } from "react";
import SpecialCalender from "../SpecialCalender/SpecialCalender";
import LastPeriodDatePicker from "./LastPeriodDatePicker";
import LastPeriodLongTime from "./LastPeriodLongTime";
import MenstrualCycle from "./MenstrualCycle";
import moment from "moment";

const Calculator = () => {
	const [selectedTime, setSelectedTime] = useState(null);
	const [timeCount, setTimeCount] = useState(1);

	const [menstrualCycleCount, setMenstrualCycleCount] = useState(1);
	const [showResult, setShowResult] = useState(false);
	const getResultHandle = () => {
		if (selectedTime && timeCount && selectedTime) {
			setShowResult(true);
		} else {
			alert("Please Select a fixe date");
		}
	};

	return (
		<>
			<div className="calculatorPart">
				{showResult ? (
					<SpecialCalender
						selectedTime={selectedTime}
						timeCount={timeCount}
						menstrualCycleCount={
							menstrualCycleCount
						}
					/>
				) : (
					<>
						<LastPeriodDatePicker
							selectedTime={selectedTime}
							setSelectedTime={
								setSelectedTime
							}
						/>
						<LastPeriodLongTime
							timeCount={timeCount}
							setTimeCount={setTimeCount}
						/>
						<MenstrualCycle
							menstrualCycleCount={
								menstrualCycleCount
							}
							setMenstrualCycleCount={
								setMenstrualCycleCount
							}
						/>
					</>
				)}
			</div>
			{showResult ? (
				""
			) : (
				<button
					className="getResultBtn"
					onClick={getResultHandle}
				>
					Get Result
				</button>
			)}
		</>
	);
};

export default Calculator;
