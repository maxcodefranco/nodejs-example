exports.requireAuth = () => {
    return (req, res, next) => {
        next();
    }
}