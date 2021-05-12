import "./styles/index.scss";
import List from "./components/List";

function App() {
	return (
		<div className="App">
			<div className="header">
				<div class="topnav">Header Title</div>
			</div>

			<h3 className="title">React Gallery</h3>
			<List />

			<div className="footer">
				<h2>Footer</h2>
			</div>
		</div>
	);
}

export default App;
