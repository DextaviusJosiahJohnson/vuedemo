const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
// Use environment variable for production (Render)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://renzonengasca_db_user:uN60Cwj4fQpE8B34@cluster0.mongodb.net/archive_db?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// API Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.post('/api/submit-archive', async (req, res) => {
  const { fName, lName, age } = req.body;
  try {
    const newUser = new User({ fName, lName, age });
    await newUser.save();

    if (req.headers['accept'] && req.headers['accept'].includes('text/html')) {
      res.status(200).send('Saved');
    } else {
      res.status(201).json({ message: 'Saved' });
    }
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/update-user/:id', async (req, res) => {
  const { id } = req.params;
  const { fName, lName, age } = req.body;
  try {
    await User.findByIdAndUpdate(id, { fName, lName, age });
    res.status(200).send('Updated');
  } catch (err) {
    res.status(500).send('Error updating user');
  }
});

app.post('/api/delete-user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).send('Updated');
  } catch (err) {
    res.status(500).send('Error deleting user');
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Server is running. Use the Vue frontend to access the site.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 SERVER READY on port ${PORT}`);
});
