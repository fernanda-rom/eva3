function validar() {
    var ret_email = validar_email();
    var ret_password = validar_password();
    var ret_direccion = validar_direccion();
    var ret_fono = validar_fono();
    var ret_url = validar_url();
    return ret_email && ret_password && ret_direccion && ret_fono && ret_url; 
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (email == "") {
        div.innerText = "Campo usuario no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}
}

function validar_password() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var div = document.getElementById("err_password1");

    if (password1.trim() === "") {
        div.innerText = "Campo clave no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
    if (password1.length < 3 || password1.length > 6) {
        div.innerText = "La contraseña debe tener de 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    } else if (!/[a-zA-Z]/.test(password1) || !/\d/.test(password1)) {
        div.innerText = "La contraseña debe tener al menos una Mayúscula y un número"
        div.className = "text-danger";
        return false;
    }
    else {
        if(password1 != password2) {
            div.innerText = "Las contraseñas no coinciden";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }         
}}

function validar_url() {
    var url = document.getElementById("url").value;
    var div = document.getElementById("err_url");
    var com = url.indexOf(".com");
    var cl = url.indexOf(".cl");

    if (url.trim()=== "" ){
        div.innerText="";
        div.className="";
        return false;

    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
        div.innerText="La URL debe de comenzar con http:// o https://";
        div.className="text-danger";
        return false;

    }else {
        if (com < 1 && cl < 1 ){
            div.innerText = "debe de tener .cl o .com";
            div.className = "text-danger";
            return false;
        }
    }
    }
 }

function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");
    if (direccion == "") {
        div.innerText = "Campo dirección no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
    if (direccion.length < 10) {
        div.innerText = "";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
 }
}


function validar_fono() {
    var fono = document.getElementById("fono").value;
    var div = document.getElementById("err_fono");
    if (fono.trim() == "") {
        div.innerText = "Campo Teléfono no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (fono < 9 || fono > 9 ) {
            div.innerText="El teléfono debe tener 9 dígitos"
            div.className="text-danger";
            return false;
    }
}}


const hobby = [];

function proceso() {
    let input = document.getElementById("libre");
    hobby.push(input.value);
    let div = document.getElementById("lista");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    div.appendChild(ul);
    for (let i = 0; i < hobby.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = hobby[i];
        ul.appendChild(li);
    }    
}
    







