import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { templates } from "./items/templates";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{templates.map((Component, index) => {
						const i = index + 1;
						return i === 1 ? (
							<Route index element={<Component />} key={i} />
						) : (
							<Route path={`template_${i}`} element={<Component />} key={i} />
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
