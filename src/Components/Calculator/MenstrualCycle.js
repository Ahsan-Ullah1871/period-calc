import React, { useState } from "react";

const MenstrualCycle = ({ menstrualCycleCount, setMenstrualCycleCount }) => {
	const minus = () => {
		if (menstrualCycleCount > 1) {
			setMenstrualCycleCount(menstrualCycleCount - 1);
		}
	};
	return (
		<div className="MenstrualCycle">
			<div className="headerStyle">
				<p className="headerText">3</p>
			</div>
			<div className="tittle">
				<p>How long is your menstrual cycle?</p>
			</div>
			<div className="btn-Box buttons">
				<div className="minus" onClick={minus}>
					-
				</div>
				<div className="timeCount">
					{menstrualCycleCount}
				</div>
				<div
					className="plus"
					onClick={() =>
						setMenstrualCycleCount(
							menstrualCycleCount + 1
						)
					}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default MenstrualCycle;
