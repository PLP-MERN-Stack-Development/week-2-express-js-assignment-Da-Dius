const requestLogger = (req, res, next) => {
    const start = new Date().getTime();

    res.on('finish', () => {
        const duration = new Date().getTime() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${req.statusCode} ${duration}ms}`);
    });

    next();
};

module.exports = requestLogger;