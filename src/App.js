import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<Cars />} />
			</Routes>
		</div>
	);
}

export default App;
