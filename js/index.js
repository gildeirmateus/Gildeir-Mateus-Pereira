start();

function start(){
    let btn = document.getElementById('loginButton');
    btn.onclick = function(){
        let matricula = document.getElementById('matricula');
        let senha = document.getElementById('senha');
        clearFields(matricula, senha);
        if(validateFields()){
            login(matricula, senha);
            clearFields(matricula, senha);
        }
    };

}

function validateFields(){
    let isValid = true;
    let matri = document.getElementById('matricula');
    let senh = document.getElementById('senha');
    if(matri.value.trim() === ''){
        showFieldMessageError();
        isValid = false;
    }
    else if(senh.value.trim() === ''){
        showFieldMessageError();
        isValid = false;
    }
    return isValid;
}
function showFieldMessageError(inputId){
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    spanError.className = spanError.className.replace('hide', '').trim();
}

function hideFieldMessageError(inputId){
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    if(!spanError.className.includes('hide')){
        spanError.className = spanError.className + ' hide';
    }
}

function getNumberValue(inputId){
    let input = document.getElementById(inputId);
    return parseFloat(input.value);
}

function login(matricula, senha){
    let mat = getNumberValue('matricula');
    let senh = getNumberValue('senha');
    if(matricula.value==="123456" && senha.value === "123456"){
        alert('login realizado com sucesso!');
    }
}

function clearFields(matricula, senha){
    matricula.value = '';
    senha.value = '';
    matricula.focus();
    hideFieldMessageError();
}
