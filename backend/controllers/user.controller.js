const User = require('../models/user.model');

exports.getUsers = (req, res) => {
    const users = User.findAll();
    res.json(users);
};

exports.submitArchive = (req, res) => {
    const { fName, lName, age } = req.body;
    User.create(fName, lName, age);
    console.log('This one is remembered.');

    // If the request came from the HTML form, redirect to the archives page
    if (req.headers['accept'] && req.headers['accept'].includes('text/html')) {
        return res.redirect('/PhobosKraber.html');
    }

    // Otherwise, send a JSON response for the Vue frontend
    res.status(201).json({ message: 'User archived successfully' });
};

exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { fName, lName, age } = req.body;
    User.update(userId, fName, lName, age);
    console.log(`User ID ${userId} updated.`);
    res.redirect('/PhobosKraber.html');
};

exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    User.delete(userId);
    console.log(`User ID ${userId} deleted.`);
    res.redirect('/PhobosKraber.html');
};

exports.servePage = (req, res) => {
    const page = req.params.page || 'PhobosBasic';
    const filepath = require('path').join(__dirname, '..', 'public', `${page}.html`);
    res.sendFile(filepath);
};
