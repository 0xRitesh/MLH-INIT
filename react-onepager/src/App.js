import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Ritesh Kumar"
				age="20"
				city="India"
				
				bio="Web developer 👨‍💻"
				
			></ProfileCard>
		</div>
	);
}

export default App;
