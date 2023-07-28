import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Input from "./Input.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Input></Input>
		</div>
	);
};

export default Home;
