const { body, validationResult } = require('express-validator');

const productValidationRules = () => {
    return [
        body('name')
            .trim()
            .notEmpty()
            .withMessage('Name is required')
            .isLength({ min: 3, max: 100 })
            .withMessage('Product name must be between 3 and 100 characters'),

        body('description')
            .optional(),

        body('price')
            .notEmpty()
            .withMessage('Price is required')
            .isFloat({ gt: 0 })
            .withMessage('Price must be a positive number'),

        body('category')
            .optional(),
            
        body('inStock')
            .isBoolean()
            .withMessage('inStock must be a boolean value')
    ];
};

// middleware to check for validation errors
const validateProduct = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false,
            errors: errors.array().map(err => ({
                field: err.param,
                message: err.msg
            }))
        });
    }
    next();
};

module.exports = { 
    productValidationRules,
    validateProduct
};