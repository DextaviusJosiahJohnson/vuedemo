const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'users.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fName TEXT,
    lName TEXT,
    age INTEGER
  )
`);

// Seed data if empty
const rowCount = db.prepare('SELECT count(*) as count FROM users').get();
if (rowCount.count === 0) {
    const insert = db.prepare('INSERT INTO users (fName, lName, age) VALUES (?, ?, ?)');
    insert.run('Cartier', 'Slinks', 26);
    insert.run('Wattkin', 'Slate', 22);
}

module.exports = db;
