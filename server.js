
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 2024;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});




app.get("/",function(req,res){
  
	res.sendFile(path + 'index.html');
  
}); 



app.get("/login",function(req,res){
  res.redirect('/');
}); 


app.post("/lista_clientes",function(req,res){

    const {filtro} = req.body;

    let qry = `SELECT top 70 TIPO,NOMBRE,DIRECCION,TELEFONO,REFERENCIA,VISITA,LATITUD,LONGITUD
      FROM POS_CLIENTES WHERE NOMBRE LIKE '%${filtro}%';`


    execute.Query(res,qry)

}); 


app.post("/insert_cliente",function(req,res){

  const {tipo,nombre,direccion,telefono,referencia,visita,latitud,longitud} = req.body;

  let qry = `INSERT INTO POS_CLIENTES 
              (TIPO,NOMBRE,DIRECCION,TELEFONO,REFERENCIA,VISITA,LATITUD,LONGITUD)
                VALUES
              ('${tipo}','${nombre}','${direccion}','${telefono}','${referencia}','${visita}','${latitud}','${longitud}')
            `

            console.log(qry)

  execute.Query(res,qry)

}); 



app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});



http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

