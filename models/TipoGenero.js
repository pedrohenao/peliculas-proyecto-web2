const {Schema,model} = requiere("mongoose");

const TipoGeneroSchema =Schema({
    nombre : {

            Type: String,
            required: true,

    },

    estado : {
            Type: String,
            required: true,
            enum: [

                "Activo","Inactivo"
            ]
        },

        fechaCreacion: {
            Type: Date,
            required: true,

        },

        fechaActualizacion: {
        Type: Date,
        required: true,

        },

        descripcion : {

            Type: String,
            required: true,

    }       

});

module.exports = model ("TipoGenero",TipoGeneroSchema);




    
