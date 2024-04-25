import "./App.css";
import React from "react";
import { OPSFooter, OPSHeader } from "./components/Layout";
import { MovieSearch } from "./MovieSearch";

function App() {
	return (
		<div>
			<OPSHeader></OPSHeader>
			<MovieSearch></MovieSearch> 
            <OPSFooter></OPSFooter>
		</div>
	);
}

export default App;
