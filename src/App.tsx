import React, {useState} from "react";

function App() {
	const [value, setValue] = useState("");
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		const {
			currentTarget: {value},
		} = e;
		setValue(value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// console.log(event);
		console.log("안녕하세요", value);
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={value} onChange={onChange} type="text" placeholder="username" />
				<button>Log in</button>
			</form>
		</div>
	);
}

export default App;
