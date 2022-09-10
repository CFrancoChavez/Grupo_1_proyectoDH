//nuevo código middleware para mantener al usuario en sesión --konrad

function authMiddleware(req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/usuarios/login');
    }
    next();
    
};

module.exports = authMiddleware;