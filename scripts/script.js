function encriptar(){
    //capturamos los datos de los textos
    var text= document.getElementById("textoATraducir").value;
    var traduccion = document.getElementById("textoTraducido");
    traduccion.value = "";
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
}

function desencriptar(){
    var text= document.getElementById("textoATraducir").value;
    var traduccion = document.getElementById("textoTraducido");
    text = text.replaceAll("ai","a");
    text = text.replaceAll("enter","e");
    text = text.replaceAll("imes","i");
    text = text.replaceAll("ober","o");
    text = text.replaceAll("ufat","u");
    traduccion.value = text;
}

function copiar(){
    var aux = document.getElementById("textoTraducido");
    aux.select();
    document.execCommand("copy");
}