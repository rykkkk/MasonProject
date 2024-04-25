import "./App.css";
import React from "react";
import { OPSFooter, OPSHeader } from "./components/Layout";
import {   } from "./MovieSearch";
import { Output ,MovieResults} from "./Output";

function App() {
	return (
		<div>
			<OPSHeader></OPSHeader>
			<Output></Output>
			<MovieResults></MovieResults> 
            <OPSFooter></OPSFooter>
		</div>
	);
}

export default App;
