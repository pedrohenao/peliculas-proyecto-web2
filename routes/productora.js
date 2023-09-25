const {Router} = require("express");
const{validationResult, check} = require("express-validator");

const router = Router();

const Productora = require("./models/Productora");
const productora = require("../models/productora");



router.get("/", async function(req,res){
    try {

        const productoras = await Productora.find ();
        res.send(productoras);
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
        check("slogan","slogan.requerido").not().isEmpty(),


    ],

    async function (req,res) {
        try {

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            let productora = new Productora();

            productora.nombre = req.body.nombre;
            productora.estado =req.body.estado;
            productora.fechaCreacion =new Date();
            productora.fechaActualizacion =new Date();
            productora.descripcion =req.body.descripcion;
            productora.slogan =req.body.slogan;

            productora = await productora.save();

            res.send (productora);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error");

        }


    });

    router.put ("/:productoraId",
    
    [
        check("nombre","nombre.requerido").not().isEmpty(),
        check("estado","estado.requerido").isIn(["Activo","Inactivo"]),
        check("descripcion","descripcion.requerido").not().isEmpty(),
        check("slogan","slogan.requerido").not().isEmpty(),


    ],

    async function (req,res) {
        try {

            let productora = await Productora.findById(req.params.productoraId);
            if (!productora) {

                return res.status(400).send("Productora no existe");
            }

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            productora.nombre = req.body.nombre;
            productora.estado =req.body.estado;
            productora.fechaCreacion =new Date();
            productora.fechaActualizacion =new Date();
            productora.descripcion =req.body.descripcion;
            productora.slogan =req.body.slogan;

            productora = await tipoGenero.save();

            res.send (productora);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error");

        }


    });

    module.exports = router;

