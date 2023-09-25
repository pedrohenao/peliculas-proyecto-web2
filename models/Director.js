const {Schema,model} = requiere("mongoose");

const DirectorSchema =Schema({
    nombre : {

            Type: String,
            required: true

    },

    estado : {
            Type: String,
            required: true,
            enum: [

                "Activo","Inactivo",
            ]
        },

        fechaCreación: {
            Type: Date,
            required: true,

        },

        fechaActualizacion: {
        Type: Date,
        required: true,

        }  

});

module.exports = model ("Director",DirectorSchema);