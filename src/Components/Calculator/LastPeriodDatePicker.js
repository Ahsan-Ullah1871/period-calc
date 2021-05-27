import React from "react";
import "./Calculator.css";
import Modal from "react-modal";
import Calender from "../Calender/Calender";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		width: "70%",
	},
};

Modal.setAppElement("#root");

const LastPeriodDatePicker = ({ selectedTime, setSelectedTime }) => {
	const datePicker = () => {};
	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="periodDatePicker">
			<div className="headerStyle">
				<p className="headerText">1</p>
			</div>
			<div className="tittle">
				<p>When was the first day of your last period?</p>
			</div>
			<div className="btn-Box" onClick={openModal}>
				{selectedTime
					? `${selectedTime.d + selectedTime.month}`
					: "Date of last period"}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<Calender
					selectedTime={selectedTime}
					setSelectedTime={setSelectedTime}
					closeModal={closeModal}
				/>
			</Modal>
		</div>
	);
};

export default LastPeriodDatePicker;
