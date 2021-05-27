import React, { useState } from "react";
import "./Calender.css";
import moment from "moment";

const Calender = ({ selectedTime, setSelectedTime, closeModal }) => {
	let weekdayshort = moment.weekdaysShort();
	const [dateObject, setDateObject] = useState(moment());
	const [selectedDate, setSelectedDate] = useState(dateObject.format("D"));
	const [selectedMonth, setSelectedMonth] = useState(
		dateObject.format("MMMM")
	);

	const firstDayOfMonth = () => {
		let firstDay = moment(dateObject).startOf("month").format("d");
		return firstDay;
	};
	const daysInMonth = () => {
		return dateObject.daysInMonth();
	};
	const currentDay = () => {
		return dateObject.format("D");
	};
	const month = () => {
		return dateObject.format("MMMM");
	};
	const onDayClick = (e, d, month) => {
		setSelectedDate(d);
		setSelectedMonth(month);
		setSelectedTime({ d, month });
	};
	console.log("SELECTED DAY: ", selectedDate, selectedMonth);

	let blanks = [];
	for (let i = 0; i < firstDayOfMonth(); i++) {
		blanks.push(<td className="calendar-day empty">{""}</td>);
	}
	let daysInMonthBox = [];
	for (let d = 1; d <= daysInMonth(); d++) {
		let CurrentDay = d == selectedDate ? "today" : "";
		daysInMonthBox.push(
			<td
				key={d}
				className={`calendar-day ${CurrentDay}`}
				onClick={(e) => {
					onDayClick(e, d, month());
				}}
			>
				<span>{d}</span>
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
		<div className="CalenderPart">
			<div className="monthName">{month()}</div>
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
			<button className="closeBtn" onClick={() => closeModal()}>
				Done
			</button>
		</div>
	);
};

export default Calender;
