import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Input from "./Input.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Input></Input>
			<img id="pikachu" src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif" alt="" />
		</div>
	);
};

export default Home;
