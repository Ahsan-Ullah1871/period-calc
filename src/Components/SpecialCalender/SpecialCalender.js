import React, { useState } from "react";
import "./SpecialCalender.css";
import moment from "moment";

const SpecialCalender = () => {
	let weekdayshort = moment.weekdaysShort();
	const [dateObject, setDateObject] = useState(moment("25 May"));

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
		console.log("j");
		let curr = "month";

		setDateObject(moment().subtract(1, curr));
	};
	const onNext = () => {
		let curr = "month";

		setDateObject(moment().add(1, curr));
	};

	let blanks = [];
	for (let i = 0; i < firstDayOfMonth(); i++) {
		blanks.push(<td className="calendar-day empty">{""}</td>);
	}
	let daysInMonthBox = [];
	for (let d = 1; d <= daysInMonth(); d++) {
		daysInMonthBox.push(
			<td key={d} className={`calendar-day  `}>
				{d}
			</td>
		);
	}
	var totalSlots = [...blanks, ...daysInMonthBox];
	let rows = [];
	let cells = [];
	totalSlots.forEach((row, i) => {
		if (i % 7 !== 0) {
			cells.push(row); // if index not equal 7 that means not go to next week
		} else {
			rows.push(cells); // when reach next week we contain all td in last week to rows
			cells = []; // empty container
			cells.push(row); // in current loop we still push current row to new container
		}
		if (i === totalSlots.length - 1) {
			// when end loop we add remain date
			rows.push(cells);
		}
	});

	return (
		<>
			<div className="CalenderPart">
				<div className="calenderHeader">
					<div
						className="previous"
						onClick={(e) => onPrev()}
					>
						Prev
					</div>
					<div className="month">{month()}</div>
					<div
						className="next"
						onClick={(e) => onNext()}
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
