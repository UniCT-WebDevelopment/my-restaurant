

let err={
    'nome': true,
    'cognome': true,
    'eta': true,
    'telefono': true,
    'indirizzo': true,
    'username': true,
    'password': true,
    'confermaPassword': true,
};

function checkError(obj) {
    for (let key in obj) {
      if (obj[key] === true) {
        return;
      }
    }

    document.getElementById('button').disabled=false;
  }

const nome=document.getElementById('nome');
nome.addEventListener('blur', ()=>{
    if(nome.value.length ==0){
        const error= document.getElementById('err_nome');
        error.classList.remove('d-none');
        err['nome']=true;
        document.getElementById('button').disabled=true;

    }
    else{
        const error= document.getElementById('err_nome');
        error.classList.add('d-none');
        err['nome']=false;
        checkError(err);
    }
});

const cognome=document.getElementById('cognome');
cognome.addEventListener('blur', ()=>{
    if(cognome.value.length ==0){
        const error= document.getElementById('err_cognome');
        error.classList.remove('d-none');
        err['cognome']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_cognome');
        error.classList.add('d-none');
        err['cognome']=false;
        checkError(err);
    }
});

const eta=document.getElementById('eta');
eta.addEventListener('blur', ()=>{
    if(eta.value.length ==0){
        const error= document.getElementById('err_eta');
        error.classList.remove('d-none');
        err['eta']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_eta');
        error.classList.add('d-none');
        err['eta']=false;
        checkError(err);
    }
});

const n_telefono=document.getElementById('n_telefono');
n_telefono.addEventListener('blur', ()=>{
    if(n_telefono.value.length ==0){
        const error= document.getElementById('err_n_telefono');
        error.classList.remove('d-none');
        err['telefono']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_n_telefono');
        error.classList.add('d-none');
        err['telefono']=false;
        checkError(err);
    }
});

const indirizzo=document.getElementById('indirizzo');
indirizzo.addEventListener('blur', ()=>{
    if(indirizzo.value.length ==0){
        const error= document.getElementById('err_indirizzo');
        error.classList.remove('d-none');
        err['indirizzo']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_indirizzo');
        error.classList.add('d-none');
        err['indirizzo']=false;
        checkError(err);
    }
});

const username=document.getElementById('username');
username.addEventListener('blur', ()=>{
    if(username.value.length ==0){
        const error= document.getElementById('err_username');
        error.classList.remove('d-none');
        err['username']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_username');
        error.classList.add('d-none');
        err['username']=false;
        checkError(err);
    }
});

const password=document.getElementById('password');
password.addEventListener('blur', ()=>{
    if(password.value.length ==0){
        const error= document.getElementById('err_password');
        error.classList.remove('d-none');
        err['password']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_password');
        error.classList.add('d-none');
        err['password']=false;
        checkError(err);
    }
});

const confermaPassword=document.getElementById('confermaPassword');
confermaPassword.addEventListener('blur', ()=>{
    if(confermaPassword.value.length ==0){
        const error= document.getElementById('err_confermaPassword');
        error.classList.remove('d-none');
        err['confermaPassword']=true;
        document.getElementById('button').disabled=true;
    }
    else{
        const error= document.getElementById('err_confermaPassword');
        error.classList.add('d-none');
        err['confermaPassword']=false;
        checkError(err);
    }
});









