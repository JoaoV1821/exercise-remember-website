class CadastroModel {
    constructor(email, senha, rg, cep) {
        this._email = this._validaEmail(email);
        this._senha = this._validaSenha(senha);
        this._rg = this._validaRg(rg);
        this._cep = this._buscaCep(cep);
    };

    _validaEmail(email) {
        if (email == '') {
            throw new Error('*Este campo é obrigatório');
        };
    };

    _validaSenha(senha) {
        if (senha == '') {
            throw new Error('*Este campo é obrigatório');
        };
    };

    _validaRg(rg) {
        if (rg == '') {
            throw new Error('*Este campo é obrigatório');
        };
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
        }
    };

    get email() {
        return this._email;
    };

    get senha() {
        return this._senha;
    };

    get rg() {
        return this._rg;
    };

    get cep() {
        return this._cep;
    }
}