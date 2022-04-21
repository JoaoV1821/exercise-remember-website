class CadastroModel {
    constructor(email, senha,confSenha, rg, cep) {
        this._email = this._validaEmail(email);
        this._senha = this._validaSenha(senha, confSenha);
        this._rg = this._validaRg(rg);
        this._cep = this._buscaCep(cep);
        
    };

    _validaEmail(email) {
        if (email == '') {
            throw new Error('*Este campo é obrigatório');
        } else if (email.includes('@') && email.includes('.com')) {
            return email;
        } else {
            throw new Error('*Email inválido');
        }
    };

    _validaSenha(senha, confSenha) {
        if (senha == '') {
            throw new Error('*Este campo é obrigatório');

        } else if(senha.length < 8) {
            throw new Error('*A senha deve ter no mínimo 8 caracteres');

        } else if(senha !== confSenha) {
            throw new Error('*As senhas não correspondem');

        } else {
            return senha;
        };
    };

    
    _validaRg(rg) {
        if (rg == '') {
            throw new Error('*Este campo é obrigatório');
        } else {
            for (let i=0; i<rg.length; i++) {
                if(rg[i] == '.' || rg[i] == '-') {
                    rg = rg.replace(rg[i], '');
                } 
            }
            if(rg.length < 9) {
                throw new Error('*RG inválido')
            }
        }

        return rg;
    };

    _buscaCep(cep) {
        if (cep == '') {
            throw new Error('*Este campo é obrigatório');
        } else {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const data = {};

            $.ajax({
                type: "GET",
                url: url,

            }).done((response) => {

                if (response.erro) {
                    throw new Error('*CEP inválido!');
                } else {

                    data.estado = response.uf;
                    data.cidade = response.localidade;
                    data.bairro = response.bairro;
                    data.complemento = response.complemento;
                    data.rua = response.logradouro;
                };

            }).fail((xhr, status, error) => {
                if (xhr.status == 0) {
                    throw new Error('*CEP inexistente');
                };
            });

            return data;
        };
    };

    get cep() {
        return this._cep;
    };
};
