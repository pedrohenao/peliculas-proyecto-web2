const validarPelicula = (req) => {

    const validaciones = [];
    if (!req.body.serial) {

        validaciones.push("Serial es requerido");
    }
    if (!req.body.titulo) {

        validaciones.push("Titulo es requerido");
    }
    if (!req.body.sinopsis) {

        validaciones.push("Sinopsis es requerido");
    }
    if (!req.body.url) {

        validaciones.push("Url es requerido");
    }
    if (!req.body.imagen) {

        validaciones.push("Imagen es requerido");
    }
    if (!req.body.fechaCreacion) {

        validaciones.push("Fecha Creacion es requerido");
    }
    if (!req.body.fechaActualizacion) {

        validaciones.push("Fecha Actualización es requerido");
    }
    if (!req.body.anoestreno) {

        validaciones.push("Año estreno es requerido");
    }
    if (!req.body.tipogenero) {

        validaciones.push("genero es requerido");
    }
    if (!req.body.director) {

        validaciones.push("Director es requerido");
    }
    if (!req.body.productora) {

        validaciones.push("Serial es requerido");
    }

    if (!req.body.tipo) {

        validaciones.push("Tipo es requerido");
    }

    return validaciones;
}

module.exports = {

    validarPelicula,}

const validaciones = validarPelicula(req);

if (validaciones.lenght > 0){

        return res.status(400).send(validaciones);
}