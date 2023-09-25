const {Router} = require("express");
const Tipo = require("./models/Tipo");
const{validationResult, check} = require("express-validator");

const router = Router();

router.get("/", async function(req,res){
    try {

        const tipos = await Tipo.find ();
        res.send(tipos);
    } catch (error){
        console.log(error);
        rest.send("Ocurrio un error");

    }

});

router.post( "/",

    [
        check("nombre","nombre.requerido").not().isEmpty(),
        
    ],

    async function (req,res) {
        try {

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            let tipo = new Tipo();

            tipo.nombre = req.body.nombre;
            director.fechaCreacion =new Date();
            director.fechaActualizacion =new Date();

            tipo = await tipo.save();

            res.send (tipo);

        } catch (error) {
            console.log(error);
            res.send("Ocurrio un error");

        }


    });

    router.put ("/:marcaId",
    
    [
        check("nombre","nombre.requerido").not().isEmpty(),

    ],

    async function (req,res) {
        try {

            let tipo= await Tipo.findById(req.params.tipoId);
            if (!tipo) {

                return res.send("tipo no existe");
            }

            const error = validationResult(req);
            if (!errors.isEmpty()){

                return res.status(400).json({messages: errors.array()});
            
            }

            tipo.nombre = req.body.nombre;
            tipo.fechaCreacion =new Date();
            tipo.fechaActualizacion =new Date();

            tipo = await tipo.save();

            res.send (tipo);

        } catch (error) {
            console.log(error);
            res.send("Ocurrio un error");

        }


    });

    module.exports = router;
