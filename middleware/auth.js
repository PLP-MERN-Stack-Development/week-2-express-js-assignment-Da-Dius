const auth = (req, res, next) => {

    if (process.env.NODE_ENV === 'development') {
        return next();
    }
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            error: 'Unauthorized. Invalid or missing API key.'
        });
    }

    next();
};

module.exports = auth;