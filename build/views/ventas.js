
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.vista_clientes()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_nuevo()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelleby="home-tab">
                            ${view.vista_pedidos()}
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
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
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
                    
                    <h1>LISTADO DE VENTAS</h1>

                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label class="form-label">Seleccionar fecha</label>
                                <input type="date" class="form-control" id="txtFecha" />
                            </div>
                        </div>
                        <div class="col-sm-6  col-md-8 col-lg-8 col-xl-8">
                            <h1 style="font-size:280%" class="text-right negrita text-danger">Q0.00</h1>
                        </div>
                    </div>

                    
                    <br>
                  

                
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>CLIENTE</td>
                                    <td>IMPORTE</td>
                                    <td>ANULAR</td>
                                </tr>
                            </thead>
                            <tbody id="tblPedidos">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
            
                </div>
            </div>
            <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },

        vista_clientes:()=>{
            return `

             <div class="card card-rounded shadow">
                    <div class="card-body p-2">

                    <div class="row">
                        <div class="col-4">
                            <h1 class="negrita">Listado Clientes</h1>
                        </div>
                        <div class="col-sm-8 col-md-5 col-lg-5 col-xl-5">
                            <input class="form-control" type="search" placeholder="Buscar Cliente">
                            <button class="btn btn-outline-success btn-sm hand shadow">Buscar Cliente</button>
                        </div>
                    
                        <div>
                            
                        </div>
                    </div>

                    <br>

                    
                        <div class="table-responsive col-12">
                            <table class="table table-responsive col-12">
                                <thead class="bg-naranja text-white">
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Teléfonos</td>
                                    </tr>
                                </thead>
                                <tbody id="tblpPedidos">
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody> 
                                <tfoot>
                                    <tr>

                                    </tr>
                                </tfoot> 
                                
                            </table>
                        </div>

                        <br>
                        <div class="row">
                            <div class="col-6">
                            </div>
                            <div class="col-6">
                               <button class="btn btn-circle btn-xl btn-success  hand shadow">
                                        <i class="fal fa-plus"></i>
                                </button> 
                            </div>
                        </div>

                    </div>
             </div>

           

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" id="btnAtrasClientes">
                    <i class="fal fa-arrow-left"></i>
                </button>

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-r hand shadow" id="btnSiguiente">
                    <i class="fal fa-arrow-right"></i>
                </button>
            `;
            

        },

        vista_nuevo:()=>{
            return `
                <div class="card card-rounded shadow">
                    <div class="card-body p-2">

                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <h1>TOMAR PEDIDO</h1>
                        </div>
                        <div class="col-sm-6  col-md-8 col-lg-8 col-xl-8">
                            <h1  style="font-size:280%" class="text-right negrita text-danger">Q30.00</h1>
                        </div>
                    </div>

                    </div>
                </div>


                 <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td></td>
                                    <td>CANTIDAD</td>
                                    <td>PRECIO</td>
                                    <td>SUBTOTAL</td>
                                </tr>
                            </thead>
                            <tbody id="tblPedidos">
                                <td>GARRAFON</td>
                                <td> <button class="btn">+</button> 1 <button class="btn">-</button></td>
                                <td>Q10.00</td>
                                <td>Q10.00</td>
                            </tbody>
                        </table>
                    </div>

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" id="btnAtrasNuevo">
                    <i class="fal fa-arrow-left"></i>
                </button>

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-r hand shadow" id="btnSiguienteFinPedido">
                    <i class="fal fa-arrow-right"></i>
                </button>

            `
        },

        vista_pedidos:()=> {
            return `
                <div class="card card-rounded shadow">

                    <div class="card-body p-2">
                        <div class="row">
                            <div class="col-6">
                                <h1>Total pedido</h1>
                            </div>
                            <div class="col-6">
                                <h1  style="font-size:280%" class="text-right negrita text-danger">Q30.00</h1>
                            </div>
                        </div>

                        <div class="row">
                                <div class="col-12">
                                    <button class="btn btn-success btn-xl hand shadow">Guardar pedido</button>
                                </div>
                                
                            </div>
                        </div>
                </div>

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" id="btnAtrasAgregarPedido">
                    <i class="fal fa-arrow-left"></i>
                </button>
            `;
        }

    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('txtFecha').value = F.getFecha();

    document.getElementById('btnNuevo').addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
    })

    document.getElementById('btnAtrasClientes').addEventListener('click', ()=> {
        document.getElementById('tab-uno').click();
    })

    document.getElementById('btnAtrasNuevo').addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
    })

    document.getElementById('btnSiguiente').addEventListener('click', () => {
        document.getElementById('tab-tres').click();
    })

    document.getElementById('btnSiguienteFinPedido').addEventListener('click', () => {
        document.getElementById('tab-cuatro').click();
    })

    document.getElementById('btnAtrasAgregarPedido').addEventListener('click', () => {
        document.getElementById('tab-tres').click();
    })


    F.slideAnimationTabs();

};

function initView(){

    getView();
    addListeners();

};
