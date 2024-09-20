
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.vista_modal_productos() + view.vista_modal_editar_productos()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">

                    <h1 style="font-size:280%" class="negrita text-left">Productos</h1>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>Codigo Producto</td>
                                    <td>Descripción Producto</td>
                                    <td>Costo</td>
                                    <td>Precio</td>
                                    <td>Activo</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataProductos">
                            </tbody>
                        </table>

                        <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnAgregarProducto">
                            <i class="fal fa-plus"></i>
                        </button>                        

                    </div>
                </div>
            </div>
            `
        },
        vista_nuevo:()=>{

        },
        vista_modal_productos:()=>{
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_nuevo_producto">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Agregar Producto</h1>

                                        <div class="form-group">
                                            <label>Código del producto:</label>
                                            <input type="text" class="form-control" id="txtCodigoProducto"/>
                                        </div>
                                        


                                        <div class="form-group">
                                            <label>Descripción Producto:</label>
                                            <input type="text" class="form-control" id="txtDescripcionProducto"/>
                                        </div>



                                        <div class="form-group">
                                            <label>Costo:</label>
                                            <input type="text" class="form-control" id="txtCostoProducto"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Precio:</label>
                                            <input type="text" class="form-control" id="txtPrecioProducto"/>
                                        </div>
           

                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarProducto">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            

            `;

        },
        vista_modal_editar_productos:()=>{
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_producto">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Editar Producto</h1>

                                        <div class="form-group">
                                            <label>Código del producto:</label>
                                            <input type="text" class="form-control" id="txtCodigoProductoE" disabled="true" />
                                        </div>
                                        


                                        <div class="form-group">
                                            <label>Descripción Producto:</label>
                                            <input type="text" class="form-control" id="txtDescripcionProductoE"/>
                                        </div>



                                        <div class="form-group">
                                            <label>Costo:</label>
                                            <input type="text" class="form-control" id="txtCostoProductoE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Precio:</label>
                                            <input type="text" class="form-control" id="txtPrecioProductoE"/>
                                        </div>
           

                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnEditarProducto">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            

            `;

        },

    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('btnAgregarProducto').addEventListener('click', () => {
        $("#modal_nuevo_producto").modal('show')
    })

    get_lista_productos();

    let btnGuardarProducto = document.getElementById('btnGuardarProducto');
    btnGuardarProducto.addEventListener('click', ()=> {

        F.Confirmacion("¿Está seguro que desea Guardar este nuevo Empleado?")
        .then((value) => {
            if(value==true) {

                let codprod = document.getElementById('txtCodigoProducto').value;
                let desprod = document.getElementById('txtDescripcionProducto').value;
                let codmedida = 'UNIDAD';
                let uxc = '1';
                let costo = document.getElementById('txtCostoProducto').value;
                let precio = document.getElementById('txtPrecioProducto').value;
                let activo = 'SI';

                btnGuardarProducto.disabled = true;
                btnGuardarProducto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_producto(codprod,desprod,codmedida,uxc,costo,precio)
                .then(()=> {
                    
                    F.Aviso('Producto guardado exitosamente!!!');    
                    get_lista_productos()
                    $("#modal_nuevo_producto").modal('hide');
                    limpiar_datos_productos();

                    btnGuardarProducto.disabled = false;
                    btnGuardarProducto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .cath(()=> {
                    F.AvisoError('No se pudo guardar el producto');
                    btnGuardarProducto.disabled = false;
                    btnGuardarProducto.innerHTML = `<i class="fal fa-save"></i>`;

                })

            }
        })

    })



};

function initView(){

    getView();
    addListeners();

};


function get_lista_productos() {
    
    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;
    let str = '';

    axios.post('/lista_producto', {
        filtro: ''
    }).then((response) => {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0) {
            data.recordset.map((r) => {
                str += `
                            <tr>
                                <td>${r.CODPROD}</td>
                                <td>${r.DESPROD}</td>
                                <td>${F.setMoneda(r.COSTO, 'Q.')}</td>
                                <td>${F.setMoneda(r.PRECIO,'Q.')}</td>
                                <td>${r.ACTIVO}</td>
                                <td>
                                    <button class="btn btn-info btn-circle btn-md hand shadow" 
                                    onclick="get_datos_producto('${r.CODPROD}','${r.DESPROD}','${r.COSTO}','${r.PRECIO}')">
                                        <i class="fal fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                
                `
            })
            container.innerHTML = str;
        }else {
            container.innerHTML = 'No hay datos...'
        }
    }, (error) => {
        container.innerHTML = 'No hay datos...'
    });

}

function limpiar_datos_productos() {
    
    document.getElementById('txtCodigoProducto').value = '';
    document.getElementById('txtDescripcionProducto').value = '';
    document.getElementById('txtCostoProducto').value = '';
    document.getElementById('txtPrecioProducto').value = '';
}

function insert_producto(codprod,desprod,codmedida,uxc,costo,precio) {
    return new Promise((resolve, reject) => {

        axios.post('/insert_producto', {
            codprod:codprod,
            desprod:desprod,
            codmedida:codmedida,
            uxc:uxc,
            costo:costo,
            precio:precio,
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);
            }else {
                reject();
            }
        }, (error) => {
            reject();
        });

    })
}


function get_datos_producto(codprod,desprod,costo,precio){

    $("#modal_editar_producto").modal('show')   
    
    let codprodE = document.getElementById("txtCodigoProductoE").value = codprod;
    document.getElementById("txtDescripcionProductoE").value = desprod;
    document.getElementById("txtCostoProductoE").value = costo;
    document.getElementById("txtPrecioProductoE").value = precio;


    let btnEditarProducto = document.getElementById('btnEditarProducto');
    btnEditarProducto.addEventListener('click', ()=> {

        F.Confirmacion("¿Está seguro que desear editar el producto?")
        .then((value) => {
            if(value==true) {
                
                let desprodE = document.getElementById('txtDescripcionProductoE').value;
                let costoE = document.getElementById('txtCostoProductoE').value;
                let precioE = document.getElementById('txtPrecioProductoE').value; 

                btnEditarProducto.disabled = true;
                btnEditarProducto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                update_producto(codprodE,desprodE,costoE,precioE)
                .then(() => {
                  
                    F.Aviso('Producto editado exitosamente!!!');
                    get_lista_productos()
                    $("#modal_editar_producto").modal('hide');
                    limpiar_datos_productos();

                    btnEditarProducto.disabled = false;
                    btnEditarProducto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch(()=> {
                    F.AvisoError('No se pudo guardar el producto');
                    btnEditarProducto.disabled = false;
                    btnEditarProducto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                })

            }
        })

    })

}

function update_producto(codprod,desprod,costo,precio) {
    return new Promise((resolve, reject) => {

        axios.post('/update_producto', {
            codprod:codprod,
            desprod:desprod,
            costo:costo,
            precio:precio
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0) {
                resolve(data);
            }else {
                reject();
            }
        }, (error) => {
            reject();
        });

    })

}