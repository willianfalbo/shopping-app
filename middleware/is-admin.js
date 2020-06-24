module.exports = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.redirect('/403');
    }
    next();
}