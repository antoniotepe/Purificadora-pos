let Navegar = {
    login:()=>{
        F.loadScript('./views/login.js','root')
        .then(()=>{
            initView();
        })
    },
    ventas:()=> {
        F.loadScript('./views/ventas.js', 'root')
        .then(()=>{
            initView();
        })
    },
    gerencia:()=> {
        F.loadScript('./views/gerencia.js', 'root')
        .then(()=>{
            initView();
        })
    },
    productos:()=> {
        F.loadScript('./views/productos.js', 'root')
        .then(() => {
            initView();
        })
    },
    clientes:()=> {
        F.loadScript('./views/clientes.js', 'root')
        .then(()=> {
            initView();
        })
    }
}