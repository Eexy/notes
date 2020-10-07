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
    const data = [...JSON.parse(buffer.toString())];

    return data;
}

const listNote = () => {
    const notes = getNotes();

    if (notes.length === 0) {
        return console.log("\nThere is no note(s) saved\n")
    }

    notes.forEach(note => {
        printNote(note)
    });
}

const printNote = (note) => {
        console.log(`${"-".repeat(15)}`);
        console.log("title: ",note.title);
        console.log("content: ",note.body);
        console.log(`${"-".repeat(15)} \n`);
}

const search = (title) => {
    const notes = getNotes();

    if (notes.length === 0) {
        return console.log("The is no note(s) saved");
    }

    notes.forEach(note => {
        if (note.title === title) {
            return printNote(note);
        }
    });

    console.log("There is no note corresponding");
}

module.exports = {
    createNote,
    listNote,
    search
};
