import './App.css';

function App() {
	const name = 'Vasya'

	function test() {
		return 'Teastovaya info'
	}

	return (
		<div className="App">
			<div> Hello world!</div>
			{/* {alert(123)} */}
			{/* {1 + 1} */}
			{name}
			{test()}
		</div>
	);
}

export default App;
