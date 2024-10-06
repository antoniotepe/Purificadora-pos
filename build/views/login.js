
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
            <div class="card card-rounded shadow col-sm-12 col-md-5 col-lg-5 col-xl-5">
                <div class="card-body p-4">
                    <div>
                    <img src="img/logo_santa_paula_redondo_1.png" class="rounded mx-auto d-block">
                    </div>
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control negrita" id="usuarioLogin">
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control negrita" id="claveLogin">
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-info btn-xxl" onclick="enviarLogin()">
                            <i class="fal fa-sign-in"></i>
                        </button>
                    </div>
                   
                </div>
            </div>
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

};

function initView(){

    getView();
    addListeners();

};

function enviarLogin() {
    let usuario = document.getElementById("usuarioLogin").value;
    let clave = document.getElementById("claveLogin").value;
    
    if (!usuario || !clave) {
        F.Aviso("Por favor, ingrese su usuario y clave");
        return;
    }

    // Realizar la solicitud al backend
    axios.post("/lista_usuarios_login", {
        usuario: usuario,
        clave: clave
    })
    .then((response) => {
        let data = response.data;

        // Asegurarse de que haya datos y que la consulta sea exitosa
        if (data.recordset && data.recordset.length > 0) {
            let usuarioData = data.recordset[0]; // Obtener el primer (y único) usuario
            if (usuarioData.tipo === "gerente") {
                Navegar.gerencia();
            } else if (usuarioData.tipo === "vendedor") {
                Navegar.ventas();
            } else {
                F.Aviso("Tipo de usuario no reconocido");
            }
        } else {
            F.Aviso("Usuario o contraseña incorrectos");
        }
    })
    .catch((error) => {
        console.error("Error durante el login:", error);
        F.Aviso("Hubo un problema al intentar iniciar sesión");
    });
}
