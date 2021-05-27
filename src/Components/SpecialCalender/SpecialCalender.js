import React, { useState } from "react";
import "./SpecialCalender.css";
import moment from "moment";

const SpecialCalender = ({ selectedTime, timeCount, menstrualCycleCount }) => {
	let weekdayshort = moment.weekdaysShort();
	const [dateObject, setDateObject] = useState(
		moment(`${selectedTime.d + selectedTime.month}`)
	);

	const firstDayOfMonth = () => {
		let firstDay = moment(dateObject).startOf("month").format("d");
		return firstDay;
	};
	const daysInMonth = () => {
		return dateObject.daysInMonth();
	};
	const month = () => {
		return dateObject.format("MMMM");
	};

	const onPrev = () => {
		setDateObject(moment().subtract(1, "month"));
	};
	const onNext = () => {
		let curr = "month";

		setDateObject(moment().add(1, "month"));
	};
	console.log(dateObject);
	let blanks = [];
	for (let i = 0; i < firstDayOfMonth(); i++) {
		blanks.push(<td className="calendar-day empty">{""}</td>);
	}
	let daysInMonthBox = [];
	for (let d = 1; d <= daysInMonth(); d++) {
		const periodDay =
			d == selectedTime.d ||
			(d > selectedTime.d && d <= selectedTime.d + timeCount - 1)
				? "period-day"
				: "";
		daysInMonthBox.push(
			<td
				key={d}
				className={`special-calendar-day  ${periodDay}`}
			>
				{d}
			</td>
		);
	}
	var totalSlots = [...blanks, ...daysInMonthBox];
	let rows = [];
	let cells = [];
	totalSlots.forEach((row, i) => {
		if (i % 7 !== 0) {
			cells.push(row);
		} else {
			rows.push(cells);
			cells = [];
			cells.push(row);
		}
		if (i === totalSlots.length - 1) {
			// when end loop we add remain date
			rows.push(cells);
		}
	});

	console.log(selectedTime, timeCount, menstrualCycleCount);

	return (
		<>
			<div className="CalenderPart">
				<div className="calenderHeader">
					<div
						className="previous"
						onClick={() => onPrev()}
					>
						Prev
					</div>
					<div className="month">{month()}</div>
					<div
						className="next"
						onClick={() => onNext()}
					>
						Next
					</div>
				</div>
				<table className="calendar-day">
					<thead>
						<tr>
							{weekdayshort.map((day) => {
								return (
									<th
										key={day}
										className="week-day"
									>
										{day}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{rows.map((d, i) => {
							return <tr>{d}</tr>;
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default SpecialCalender;
