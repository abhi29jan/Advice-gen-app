import React from "react";
import "./App.css";
import axios from "axios";
import imgMob from "./images/pattern-divider-mobile.svg";
import imgDesk from "./images/pattern-divider-desktop.svg";
import imgDice from "./images/icon-dice.svg";

let baseURL = "https://api.adviceslip.com/advice";

class App extends React.Component {
	state = {advice: '', id: ''};

	componentDidMount() {
		this.fetchAdviceId();
	}

	fetchAdviceId = () => {
		axios.get(baseURL)
			.then((response) => {
				const {advice, id} = response.data.slip;
				this.setState({advice, id})
			})
			.catch((error) => {
				console.log(error);
			})
	}
	render() {
		const {advice, id} = this.state;
		return (
			<div className="container">
				<h1>advice #{id}</h1>
				<p>"{advice}"</p>
				<picture>
					<source media="(min-width: 768px)" srcSet={imgDesk} />
					<img src={imgMob} alt="" />
				</picture>
				<div>
					<button onClick={this.fetchAdviceId}>
						<img src={imgDice} alt="" />
					</button>
				</div>
			</div>
		);
	}
}
export default App;
