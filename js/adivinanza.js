document.querySelector("#b1").addEventListener("click", adivinanza);
    let contador = 0;
    document.querySelector("#tx1").focus();
    document.querySelector("#b2").disabled=true;
function reiniciar(){
    contador = 0;
    document.querySelector("#tx1").focus();
    document.querySelector("#b2").disabled=true;
    document.querySelector("#b1").disabled=false;
    document.querySelector("#tx1").disabled=false;
}
function adivinanza() {
    
    
    const p1 = document.querySelector("#p1");
    let respuesta = "bacalao";
    let intentos = 3;
    contador++;
    //console.log(contador);
    if (tx1.value == "")
    {
        p1.innerHTML = "Se requiere dar una respuesta";
    }
    else
    {
        if(contador>3)
        {
            p1.innerHTML = "superaste el limite de intentos";
            document.querySelector("#b2").disabled=false;
            document.querySelector("#b1").disabled=true;
            document.querySelector("#tx1").disabled=true;
            document.querySelector("#b2").addEventListener("click", reiniciar);
        }
        else
        {
            if(tx1.value == respuesta)
            {
                p1.innerHTML = "Felicidades acertaste en el intento numero " + contador ;
            }
            else
            {
                intentos = intentos-contador;
                p1.innerHTML = "Fallaste, vas por el intento numero " + contador + " te quedan:" + intentos + " intentos"  ;
            }
        }
        

    }




}

