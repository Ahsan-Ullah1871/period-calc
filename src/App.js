import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Components/Calender/Calender";
import Calculator from "./Components/Calculator/Calculator";
import SpecialCalender from "./Components/SpecialCalender/SpecialCalender";

function App() {
	return (
		<div>
			<Calculator />
			<SpecialCalender />
		</div>
	);
}

export default App;
