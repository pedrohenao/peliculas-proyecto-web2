const {Schema,model} = requiere("mongoose");

const MediaSchema =Schema({
    serial : {

            Type: String,
            required: true,
            unique: true,

    },

    titulo : {

        Type: String,
        required: true,

    },

    sinopsis : {

        Type: String,
        required: true,

    },
    url : {

    Type: String,
    required: true,

    },

    imagen : {

    Type: String,
    required: true,

    },

    fechaCreacion: {
        Type: Date,
        required: true,

    },

    fechaActualizacion: {
        Type: Date,
        required: true,

     },  

    AnoEstreno : {

            Type: String,
            required: true,
        
     },

     genero : {

            type: Schema.Type.ObjectId, ref: "TipoGenero",
            require: falso,
        
    },

    director : {

            type: Schema.Type.ObjectId, ref: "Director",
            require: true,
        
    },

    productora : {

            type: Schema.Type.ObjectId, ref: "Productora",
            require: true,
        
    },

    tipo : {

            type: Schema.Type.ObjectId, ref: "Tipo",
            require: true,
        
    }

});

module.exports = model ("Media",MediaSchema);