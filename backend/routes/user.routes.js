const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { userValidationRules, validate } = require('../middleware/validation');

router.get('/api/users', userController.getUsers);
router.post('/submit-archive', userController.submitArchive);
router.post('/update-user/:id', userController.updateUser);
router.post('/delete-user/:id', userController.deleteUser);

// Static page routes
const pages = [
    'PhobosStyledForm',
    'PhobosKraber',
    'PhobosGridLayout',
    'rerember',
    'ok',
    'PhobosButton',
    'PhobosFlLayout',
    'PhobosProfile',
    'PhobosNavBar',
    'PhobosMiniProject',
    'PhobosMedia',
    'PhobosBasic',
    'PhobosResume'
];

pages.forEach(page => {
    router.get(`/${page}.html`, (req, res) => {
        const filepath = require('path').join(__dirname, '..', 'public', `${page}.html`);
        res.sendFile(filepath);
    });
});

router.get('/', (req, res) => {
    const filepath = require('path').join(__dirname, '..', 'public', 'PhobosBasic.html');
    res.sendFile(filepath);
});

module.exports = router;
