import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const style = {
	letterContainer: {
		overflow: "auto",
		marginBottom: "10px",
	},
	letter: {
		float: "left",
		padding: "10px 10px",
		background: "#c9e4ed",
		borderRadius: "5px",
		marginRight: "5px",
		cursor: "pointer",
	},
};

function Tile(props) {
	const { letter, output, setOutput, letterCount, setLetterCount } = props;
	const onClick = () => {
		if (!letterCount[letter]) {
			setLetterCount({ ...letterCount, [letter]: 1 });
			setOutput([...output, letter]);
		} else if (letterCount[letter] == 2) {
			setLetterCount({ ...letterCount, [letter]: 0 });
			const out = output.slice(0, output.length - 2);
			setOutput([...out, "_"]);
		} else {
			setLetterCount({ ...letterCount, [letter]: letterCount[letter] + 1 });
			setOutput([...output, letter]);
		}
	};
	return (
		<button style={style.letter} onClick={onClick}>
			{letter}
		</button>
	);
}

function getAlphabet() {
	const alphabetArray = [];
	const startingLetter = "A";
	const endLetter = "Z";

	const aCharCode = startingLetter.charCodeAt(0);
	const zCharCode = endLetter.charCodeAt(0);

	for (let i = aCharCode; i <= zCharCode; i++) {
		alphabetArray.push(String.fromCharCode(i));
	}
	return alphabetArray;
}

function Application(props) {
	const [output, setOutput] = useState([]);
	const [letterCount, setLetterCount] = useState([]);
	const alphabetArray = getAlphabet();

	return (
		<section>
			<aside style={style.letterContainer} id="letterContainer">
				{alphabetArray.map((letter, index) => (
					<Tile
						key={index}
						letter={letter}
						letterCount={letterCount}
						setLetterCount={setLetterCount}
						output={output}
						setOutput={setOutput}
					/>
				))}
			</aside>
			<div id="outputString">{output.join("")}</div>
		</section>
	);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Application />);
