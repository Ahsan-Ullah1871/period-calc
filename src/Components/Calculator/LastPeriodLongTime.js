import React, { useState } from "react";

const LastPeriodLongTime = () => {
	const [timeCount, setTimeCount] = useState(1);
	const minus = () => {
		if (timeCount > 1) {
			setTimeCount(timeCount - 1);
		}
	};
	return (
		<div className="LastPeriodLongTime">
			<div className="headerStyle">
				<p className="headerText">2</p>
			</div>
			<div className="tittle">
				<p>How long did it last?</p>
			</div>
			<div className="btn-Box buttons">
				<div className="minus" onClick={minus}>
					-
				</div>
				<div className="timeCount">{timeCount}</div>
				<div
					className="plus"
					onClick={() => setTimeCount(timeCount + 1)}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default LastPeriodLongTime;
