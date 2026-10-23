const yargs = require('yargs')
const data10 = require('./data10')

yargs.command({
    command: 'add',
    describe: 'Add a new person',
    builder: {
        id: { describe: 'id of person', demandOption: true, type: 'number' },
        fname: { describe: 'first name', demandOption: true, type: 'string' },
        lname: { describe: 'last name', demandOption: true, type: 'string' },
        age: { describe: 'age', demandOption: true, type: 'number' },
        city: { describe: 'city', demandOption: true, type: 'string' }
    },
    handler(argv) {
        data10.addPerson(argv.id, argv.fname, argv.lname, argv.age, argv.city)
    }
})
 

yargs.command({
    command: 'list',
    describe: 'List all people',
    handler() {
        data10.listData()
    }
})


yargs.command({
    command: 'read',
    describe: 'Read data of a specific person',
    builder: {
        id: { describe: 'id to read', demandOption: true, type: 'number' }
    },
    handler(argv) {
        data10.readData(argv.id)
    }
})


yargs.command({
    command: 'delete',
    describe: 'Delete a person by id',
    builder: {
        id: { describe: 'id to delete', demandOption: true, type: 'number' }
    },
    handler(argv) {
        data10.deleteData(argv.id)
    }
})


yargs.command({
    command: 'deleteAll',
    describe: 'Delete all data',
    handler() {
        data10.deleteAll()
    }
})
 

yargs.command({
    command: 'summary',
    describe: 'View full name and city of each person',
    handler() {
        data10.listSummary()
    }
})
yargs.parse()

