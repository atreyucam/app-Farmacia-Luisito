const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) return res.status(403).json({ message: 'Se requiere un token para autenticación' });

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1]; // Extrae el token del formato 'Bearer <token>'

    try {
        const verificado = jwt.verify(bearerToken, process.env.JWT_SECRET);
        req.usuario = verificado;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token no válido o expirado' });
    }
};


const autorizarRol = (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.usuario.roleUser)) {
            return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
        }
        next();
    };
};



module.exports = {
    verificarToken,
    autorizarRol
};