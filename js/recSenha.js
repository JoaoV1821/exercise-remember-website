function validacaoEmail(field) {
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
    $("msgemail").innerHTML="E-mail válido";
    alert('Recuperação de senha efetuado com sucesso, verifique seu email!')
    }else{
    $("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("[E-mail invalido], favor informar um email válido!");
    }
    }

   