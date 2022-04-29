$('#form').click(function(event){
    event.preventDefault()
    })

$('#btn').click(function(event){
    event.preventDefault()
    })

function validacaoEmail(field) {
    document.getElementById('btn').style.color = 'white';
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    com = field.value.substring(field.value.indexOf("com"));
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (com.lastIndexOf('com')!= -1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1))  {
    document.getElementById('btn').innerText = 'Solicitação enviada, verifique seu email!';
    alert('Recuperação de senha efetuado com sucesso, verifique seu email!')
    }else{
    alert('[Atenção], o email digitado não corresponde a um email válido, favor digite o email cadastrado!')
    document.getElementById('btn').style.color = 'red';
    }
    }

   