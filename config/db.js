//mongoose gestiona la conexión a bases de datos
const mongoose = require('mongoose')

const DB_URI = "mongodb+srv://Lorena:12345@adsi2364482.xime1qv.mongodb.net/?retryWrites=true&w=majority"


    const dbConnect =()=> {mongoose.connect(DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err){
                console.log('DB: ERROR !!');
            } else {
                console.log('Conexion Correcta!');
        }
    }
);   
};

module.exports = dbConnect;