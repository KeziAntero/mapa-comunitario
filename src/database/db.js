const Database = require('sqlite-async');

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS communitys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            images TEXT,
            whatsapp TEXT,
            site TEXT,
            instructions TEXT,
            year TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)