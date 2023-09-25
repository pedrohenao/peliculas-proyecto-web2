const {Router} = require("express");
const TipoGenero = require("../models/TipoGenero");
const{validationResult, check} = require("express-validator");

const router = Router();

router.get("/", async function(req,res){
    try {

        const generos = await TipoGenero.find();
        res.send(generos);
    } catch (error){
        console.log(error);
        res.status(500).send("Ocurrio un error");

    }

});

router.post( "/",

    [
        check("nombre","nombre.requerido").not().isEmpty(),
        check("estado","estado.requerido").isIn(["Activo","Inactivo"]),
        check("descripcion","descripcion.requerido").not().isEmpty(),


    ],

    async function (req,res) {
        try {

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            let tipoGenero = new TipoGenero();

            tipoGenero.nombre = req.body.nombre;
            tipoGenero.estado =req.body.estado;
            tipoGenero.fechaCreacion =new Date();
            tipoGenero.fechaActualizacion =new Date();
            tipoGenero.descripcion =req.body.descripcion;

            tipoGenero = await tipoGenero.save();

            res.send (tipoGenero);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error");

        }


    });

    router.put ("/:tipoGeneroId",
    
    [
        check("nombre","nombre.requerido").not().isEmpty(),
        check("estado","estado.requerido").isIn(["Activo","Inactivo"]),
        check("descripcion","descripcion.requerido").not().isEmpty(),


    ],

    async function (req,res) {
        try {

            let tipoGenero = await TipoGenero.findById(req.params.tipoGeneroId);
            if (!tipoGenero) {

                return res.send("genero no existe");
            }

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            tipoGenero.nombre = req.body.nombre;
            tipoGenero.estado =req.body.estado;
            tipoGenero.fechaCreacion =new Date();
            tipoGenero.fechaActualizacion =new Date();
            tipoGenero.descripcion =req.body.descripcion;

            tipoGenero = await tipoGenero.save();

            res.send (tipoGenero);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error");

        }


    });

    module.exports = router;

