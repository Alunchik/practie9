login_button.onclick = function (){
    login = prompt("Введите логин");
    if(login=='' || login===null){
        alert("Отменено")
    }
    else if(login=="Админ"){
        password = prompt("Введите пароль");
        if(password =='' || password===null){
            alert("Отменено")
        }
        else if(password === "Я главный"){
            alert("Здравствуйте!")
        }
        else {
            alert("Неверный пароль");
        }
    }
    else {
        alert("Я вас не знаю");
    }
}

reg_button.onclick = function (){
    if(reg_input.value=="Да"){
        alert("Круто!")
    }
    else{
       alert( "Попробуйте еще раз");
    }
}

const like_butt = document.getElementById("like");
like_butt.onclick = function (){
    if(like_butt.style.backgroundColor == "maroon"){
        like_butt.style.backgroundColor="lime";
    }
    else{
        like_butt.style.backgroundColor="maroon";
    }
}


