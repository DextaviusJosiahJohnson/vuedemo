const { body, validationResult } = require('express-validator');

exports.userValidationRules = () => {
    return [
        body('fName').trim().notEmpty().withMessage('First name is required'),
        body('lName').trim().notEmpty().withMessage('Last name is required'),
        body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    ];
};

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If it's a standard HTML form submission, redirect back with a query param instead of sending JSON
        if (req.headers['accept'] && req.headers['accept'].includes('text/html')) {
            return res.redirect('/PhobosStyledForm.html?error=validation');
        }
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
