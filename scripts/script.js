function encriptar(){
    //capturamos los datos de los textos
    var text= document.getElementById("textoATraducir").value;
    var traduccion = document.getElementById("textoTraducido");
    //igualamos a nada el text area
    traduccion.value = "";
    //iteramos y vamos reemplazando por las claves
    for (t of text){
        switch (t){
            case 'a':
                traduccion.value = traduccion.value + "ai";
                break;
            case "e":
                traduccion.value = traduccion.value + "enter";
                break;
            case "i":
                traduccion.value = traduccion.value + "imes";
                break;
            case "o":
                traduccion.value = traduccion.value + "ober";
                break;
            case "u":
                traduccion.value = traduccion.value + "ufat";
                break;
            default:
                traduccion.value = traduccion.value + t;
                break;
        }
    }

    mostrarTraduccion(text);
}

function desencriptar(){
    //capturamos los datos
    var text= document.getElementById("textoATraducir").value;
    var traduccion = document.getElementById("textoTraducido");
    //reemplazamos las claves por las letras correspondientes
    //usamos replaceAll
    text = text.replaceAll("ai","a");
    text = text.replaceAll("enter","e");
    text = text.replaceAll("imes","i");
    text = text.replaceAll("ober","o");
    text = text.replaceAll("ufat","u");
    //asignamos el texto al textarea correspondiente
    traduccion.value = text;

    mostrarTraduccion(text);
}

function copiar(){
    //funcion para copiar el texto codificado/decodificado
    var aux = document.getElementById("textoTraducido");
    aux.select();
    document.execCommand("copy");
}

function mostrarTraduccion(text){
    //funcion para mostrar el texto codificado/decodificado
    if (text != ""){
        document.getElementById("divTextoTraducido").style.display = "";
        document.getElementById("divImagenTexto").style.display = "none";
    }else{
        document.getElementById("divTextoTraducido").style.display = "none";
        document.getElementById("divImagenTexto").style.display = "";
    }
}