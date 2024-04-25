import "./App.css";
import React from "react";
import { OPSFooter, OPSHeader } from "./components/Layout";
import {  Output ,MovieResults} from "./MovieSearch";

function App() {
	return (
		<div>
			<OPSHeader></OPSHeader>

			<Output></Output>
<MovieResults></MovieResults>		<OPSFooter></OPSFooter>
		</div>
	);
}

export default App;
