exports.errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${err.stack}`);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        }
    });
};
