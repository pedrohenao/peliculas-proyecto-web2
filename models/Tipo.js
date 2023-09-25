const {Schema,model} = requiere("mongoose");

const TipoSchema =Schema({
    nombre : {

            Type: String,
            required: true,

        },

        fechaCreación: {
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

module.exports = model ("Tipo",TipoSchema);