const db = require('../config/db');

const User = {
    create: (fName, lName, age) => {
        const stmt = db.prepare('INSERT INTO users (fName, lName, age) VALUES (?, ?, ?)');
        return stmt.run(fName, lName, age);
    },
    findAll: () => {
        return db.prepare('SELECT * FROM users').all();
    },
    update: (id, fName, lName, age) => {
        const stmt = db.prepare('UPDATE users SET fName = ?, lName = ?, age = ? WHERE id = ?');
        return stmt.run(fName, lName, age, id);
    },
    delete: (id) => {
        const stmt = db.prepare('DELETE FROM users WHERE id = ?');
        return stmt.run(id);
    }
};

module.exports = User;
