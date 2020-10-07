const fs = require("fs");

const createNote = (title, body) => {
    const note = { title, body };
    const notes = getNotes();

    notes.push(note);

	fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const getNotes = () => {
    if (!fs.existsSync("notes.json")) {
        return [];
    }

    const buffer = fs.readFileSync("notes.json");
    const data = JSON.parse(buffer.toString());

    return data;
}

module.exports.createNote = createNote;
