import "./App.css";
import React from "react";
import { OPSFooter, OPSHeader } from "./components/Layout";
import {  Output } from "./MovieSearch";

function App() {
	return (
		<div>
			<OPSHeader></OPSHeader>

			<Output></Output>
			<OPSFooter></OPSFooter>
		</div>
	);
}

export default App;
