//mensaje de envio exitoso
exports.success = function (req, res, mensaje, status){
    const statusCode = status || 200;
    const mensajeOk = mensaje || '';
    res.status(status).send({
        Error: false,
        status: this.status,
        body: mensaje
    })
}

///mensaje envio error
exports.error = function (req, res, mensaje, status){
    const statusCode = status || 500;
    const mensajeOk = mensaje || 'error interno';
    res.status(status).send({
        Error: true,
        status: this.status,
        body: mensaje
    })
}