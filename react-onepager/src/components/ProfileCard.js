import React from "react";
import "./ProfileCard.css";
import avatar from "../images/dp.png";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text">{props.city}</h2>
			<div className="social-container">
				
				<div className="bio">
					<h1 className="bold-text">{props.bio}</h1>
					<h2 className="smaller-text"> </h2>
				</div>
				
			</div>
		</div>
	);
}

export default ProfileCard;
