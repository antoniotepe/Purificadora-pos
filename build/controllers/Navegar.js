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
    }
}