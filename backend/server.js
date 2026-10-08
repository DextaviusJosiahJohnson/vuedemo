const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

// 1. Database Setup
const db = new Database(path.join(__dirname, 'users.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fName TEXT,
    lName TEXT,
    age INTEGER
  )
`);

const rowCount = db.prepare('SELECT count(*) as count FROM users').get();
if (rowCount.count === 0) {
    const insert = db.prepare('INSERT INTO users (fName, lName, age) VALUES (?, ?, ?)');
    insert.run('Cartier', 'Slinks', 26);
    insert.run('Wattkin', 'Slate', 22);
}

// 2. Middleware - Added CORS for Vue
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 3. Routes
app.get('/api/users', (req, res) => {
    const users = db.prepare('SELECT * FROM users').all();
    res.json(users);
});

app.post('/submit-archive', (req, res) => {
    console.log('---> SUBMIT BUTTON PRESSED');
    console.log('Data received:', req.body);

    const { fName, lName, age } = req.body;

    try {
        const stmt = db.prepare('INSERT INTO users (fName, lName, age) VALUES (?, ?, ?)');
        stmt.run(fName, lName, age);
        console.log('✓ Saved to DB: ' + fName);

        if (req.headers['accept'] && req.headers['accept'].includes('text/html')) {
            res.status(200).send('Saved');
        } else {
            res.status(201).json({ message: 'Saved' });
        }
    } catch (err) {
        console.error('X DB Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/update-user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { fName, lName, age } = req.body;
    db.prepare('UPDATE users SET fName = ?, lName = ?, age = ? WHERE id = ?').run(fName, lName, age, userId);
    console.log(`✓ Updated User ${userId}`);
    res.status(200).send('Updated');
});

app.post('/delete-user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    db.prepare('DELETE FROM users WHERE id = ?').run(userId);
    console.log(`✓ Deleted User ${userId}`);
    res.status(200).send('Updated');
});

app.get('/', (req, res) => {
    res.status(200).send('Server is running. Use the Vue frontend to access the site.');
});

app.listen(PORT, () => {
    console.log(`\n🚀 SERVER READY`);
    console.log(`URL: http://localhost:3000\n`);
});
