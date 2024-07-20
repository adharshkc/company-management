"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalErrorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
};
exports.default = GlobalErrorHandler;
