const {Router} = require("express");
const Director = require("./models/Director");
const{validationResult, check} = require("express-validator");

const router = Router();

router.get("/", async function(req,res){
    try {

        const tipos = await Director.find ();
        res.send(tipos);
    } catch (error){
        console.log(error);
        res.status(500).send("Ocurrio un error");

    }

});

router.post( "/",

    [
        check("nombre","nombre.requerido").not().isEmpty(),
        check("estado","estado.requerido").isIn(["Activo","Inactivo"]),
        
    ],

    async function (req,res) {
        try {

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            let director = new Director();

            director.nombre = req.body.nombre;
            director.estado =req.body.estado;
            director.fechaCreacion =new Date();
            director.fechaActualizacion =new Date();

            director = await director.save();

            res.send (director);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error");

        }


    });

    router.put ("/:directorId",
    
    [
        check("nombre","nombre.requerido").not().isEmpty(),
        check("estado","estado.requerido").isIn(["Activo","Inactivo"]),


    ],

    async function (req,res) {
        try {

            let director = await Director.findById(req.params.directorId);
            if (!director) {

                return res.send("director no existe");
            }

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            director.nombre = req.body.nombre;
            director.estado =req.body.estado;
            director.fechaCreacion =new Date();
            director.fechaActualizacion =new Date();

            director = await director.save();

            res.send (director);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error");

        }


    });

    module.exports = router;
