const {Schema,model} = requiere("mongoose");

const ProductoraSchema =Schema({
    nombre : {

            Type: String,
            required: true,

    },

    estado : {
            Type: String,
            required: true,
            enum: [

                "Activo","Inactivo"],
        },

        fechaCreación: {
            Type: Date,
            required: true,

        },

        fechaActualizacion: {
        Type: Date,
        required: true,

        },

        slogan : {

            Type: String,
            required: true,

        },

        descripcion : {

            Type: String,
            required: true,

    }       

});

module.exports = model ("Productora",ProductoraSchema);