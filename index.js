const yargs = require("yargs");
const utils = require("./utils");

yargs
	.command({
		command: "add",
		desc: "Create a new note",
		builder: yargs => {
			return yargs.options({
				title: {
					alias: "t",
					desc: "add title to the note",
					demandOption: true,
					type: "string"
				},
				body: {
					alias: "b",
					desc: "add body to the note",
					type: "string"
				}
			});
		},
		handler: argv => {
			utils.createNote(argv.title, argv.body);
		}
	})
	.command({
		command: "list",
		desc: "List all the notes",
		handler: () => {
			utils.listNote();
		}
	})
    .command({
        command: "search",
        desc: "Search for a note",
        builder: (yargs) => {
            return yargs.options({
                title: {
                    alias: "t",
                    desc: "the title of the note to search",
                    demandOption: true,
                    type: "string"
                }
            });
        },
        handler: (argv) => {
            utils.search(argv.title);
        }
    }).argv;
