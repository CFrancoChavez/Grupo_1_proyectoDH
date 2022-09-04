//nuevo código middleware para mantener al usuario en sesión --konrad

function guestMiddleware(req, res, next) {
    if(req.session.userLogged) {
        return res.redirect('/usuarios/detalleusuario');
    }
    next();
    
};

module.exports = guestMiddleware;