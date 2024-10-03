const DbName = "dbSantaPaula1";

var tblTempventas = {
    name: 'tempventa',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        EQUIVALE:{dataType: "number"},
        CANTIDAD:{dataType: "number"},
        TOTALUNIDADES:{dataType: "number"},
        COSTO:{dataType: "number"},
        PRECIO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"},
        TOTALPRECIO:{dataType: "number"}
    }
};

var database = {
    name: DbName,
    tables: [tblTempventas]
};
 
// initiate jsstore connection
var connection = new JsStore.Connection();

async function connectDb(){
        var isDbCreated = await connection.initDb(database);
        if(isDbCreated){
            //alert('Db Created & connection is opened');
           
        }
        else{
        }
    
}
//inicia la conexión a la db
connectDb();







function db_load_productos(datos){
    return new Promise((resolve,reject)=>{
        connection.insert({
            into: "tempventa",
            values: [datos],
        })
        .then(()=>{
            resolve();
        })
        .catch(()=>{
            reject();
        })
    }) 

};


function db_delete_temp_ventas(){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "tempventa"
        });
        if(rowsDeleted>0){resolve()}else{resolve()}
    })            
};

function db_select_temp_ventas() {

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "tempventa"
        });
        resolve(response)
    });
};

function db_update_cantidad(codprod,nuevaCantidad){

    return new Promise(async(resolve,reject)=>{
        let updatedrow = await connection.update({
            in: "tempventa",
            set: {
                CANTIDAD:Number(nuevaCantidad),
            },
            where: {
                CODPROD: codprod
            }
        })
        if(updatedrow>0){
            resolve();
        }else{
            reject();
        }
    });
    

}


















function deleteItemVenta(id){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "tempventa",
            where: {
                ID: id
            }
        });
        if(rowsDeleted>0){resolve()}else{reject()}
    })            
};



function selectTempventas(usuario) {

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "tempventa",
            where: {
                    USUARIO: usuario
                },
            order: { by: 'ID', type: 'asc' }
        });
        resolve(response)
    });
};
