const fs = require("fs");

const createNote = (title, body) => {
	const note = { title, body };

	fs.writeFileSync("notes.json", JSON.stringify(note));
};

module.exports.createNote = createNote;
