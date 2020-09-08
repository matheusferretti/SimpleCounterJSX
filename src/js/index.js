//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function Counter(props) {
	let mystyle = {
		display: "inline-block",
		fontSize: "60px",
		lineHeight: "60px",
		background: "#07090F",
		color: "white",
		padding: "10px",
		margin: "3px"
	};
	return (
		<div className="container">
			<div
				className="row"
				style={{ background: "black", textAlign: "center" }}>
				<div className="col-sm pt-5 mr-3" style={{ color: "white" }}>
					<i className="far fa-clock fa-3x" />
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitSix}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitFive}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitFour}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitThree}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitTwo}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitOne}
				</div>
			</div>
		</div>
	);
}

Counter.propTypes = {
	digitSix: "PropTypes.number",
	digitFive: "PropTypes.number",
	digitFour: "PropTypes.number",
	digitThree: "PropTypes.number",
	digitTwo: "PropTypes.number",
	digitOne: "PropTypes.number"
};

let simpleCounter = 0;
setInterval(function() {
	//render your react application
	const six = Math.floor(simpleCounter / 100000);
	const five = Math.floor(simpleCounter / 10000);
	const four = Math.floor(simpleCounter / 1000);
	const three = Math.floor(simpleCounter / 100);
	const two = Math.floor(simpleCounter / 10);
	const one = Math.floor(simpleCounter / 1);
	simpleCounter++;
	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
