function buscacep() {
    let cep= document.getElementById('txtcep').Value;
        if(cep !==""){
            let url = "https://brasilapi.com.br/api/cep/v1/{cep}" + cep;

            let req = new XMLHttpRequest();
            req.open("get", url);
            req.send();

            //dericinar reposta
            req.onload = function(){
                if(req.status === 200){
                    let endereco = JSON.parse(req.response);
                    document.getElementById("txtestado").value = endereco.state;
                    document.getElementById("txtcidade").value = endereco.city;
                    document.getElementById("txtbairo").value = endereco.neighborhood;
                    document.getElementById("txtrua").value = endereco.street;
                }
            }

        }
}
window.onload = function(){
    let txtcep = document.getElementById("txtcep");
    txtcep.addEventListener("blur", buscacep)
}