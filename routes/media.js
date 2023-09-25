const {Router} = require("express");

const Media = require("./models/Media");
const{validarMedia} = require("./helpers/validar-media");

const router = Router();

router.get("/", async function(req,res){
    try {

       const media = await Media.find().populate ([

        {
            patch: "productora", select: "nombre estado slogan"
        },

        {
            patch: "director", select: "nombre estado"
        },
        {
            patch: "tipo", select: "nombre descripcion"
        },
        {
            patch: "tipoGenero", select: "nombre estado descripcion"
        }

       ] );
       
        res.send(media);
    } catch (error){
        console.log(error);
        res.status(500).send("Ocurrio un error al consultar el modulo media");

    }

});


router.post( "/",async function (req,res) {

    try {

        const validaciones = validarMedia(req);

        if (validaciones.lenght >0) {

            return res.status(400).send(validaciones);
        }

        const existeMediaPorSerial = await Media.findOne({serial:req.body.serial});

        if (existeMediaPorSerial) {

return res.status (400).send("ya existe el serial para otro equipo")

        }

   let Media = new Media();

            Media.serial = req.body.nombre;
            Media.titulo =req.body.estado;
            Media.sinopsis =req.body.estado;
            Media.url =req.body.estado;
            Media.imagen =req.body.estado;
            Media.AnoEstreno =req.body.estado;
            Media.tipoGenero =req.body.tipoGenero._id;
            Media.director =req.body.director._id;
            Media.productora =req.body.productora._id;
            Media.Tipo =req.body.Tipo._id;

            Media.fechaCreacion =new Date();
            Media.fechaActualizacion =new Date();
           

            Media= await Media.save();

            res.send (Media);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error al crear la pelicula");

        }


    });

    router.put ("/:mediaId",async function (req, res) {
    
        try {

            let Media = await Media.findById(req.params.mediaId);
            if (!media) {

                return res.status(400).send("pelicula no existe");
            }

            const existeMediaPorSerial = await Media.findOne ({Media: req.body.serial,_id: {$ne: Media._id}});
           
           if (existeMediaPorSerial) {

                return res.status(400).send("ya existe el serial para otra pelicula");
           }

           const validaciones = validarMedia(req);
           if (validaciones.lenght >0){

                return res.status(400).send(validaciones);
           }
           
            Media.serial = req.body.nombre;
            Media.titulo =req.body.estado;
            Media.sinopsis =req.body.estado;
            Media.url =req.body.estado;
            Media.imagen =req.body.estado;
            Media.AnoEstreno =req.body.estado;
            Media.tipoGenero =req.body.tipoGenero._id;
            Media.director =req.body.director._id;
            Media.productora =req.body.productora._id;
            Media.Tipo =req.body.Tipo._id;

            Media.fechaCreacion =new Date();
            Media.fechaActualizacion =new Date();
           

            Media= await Media.save();

            res.send (Media);

        } catch (error) {
            console.log(error);
            res.status(500).send("Ocurrio un error al consultar la pelicula");

        }

    });

router.get("/:mediaId", async function(req,res){

try {

    const media = await Media.findById(req.params.mediaId);
    if (!media){

            return res.status(404).send("Inventario no existe");
        
    }

    res.send(media);
}catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error al consultar pelicula");
}
});

module.exports = router;

