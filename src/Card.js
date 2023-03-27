import './Card.css';
import logo from "./logo.svg";

function Card() {
	return (
		<div className="card">
			<div className="card-header">
				<h1>Card</h1>
			</div>
			<div className="card-body">
				<div className="Test"></div>
				<img src={logo} alt="React Logo"></img>
			</div>
			<div>
				<p>Some info that is not valid</p>
			</div>
		</div>
	);
}



export default Card;
