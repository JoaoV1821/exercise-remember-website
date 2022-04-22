class CadastroController {
    cadastro(dataSelectors) {

        const view = new CadastroView();

        try {
            const model = new CadastroModel(dataSelectors.email, dataSelectors.senha, dataSelectors.confSenha, dataSelectors.rg, dataSelectors.cep);

            dataSelectors.estado.text(model.cep.estado)
            dataSelectors.cidade.val(model.cep.cidade) 
            dataSelectors.bairro.val(model.cep.bairro) 
            dataSelectors.rua.val(model.cep.rua)
            dataSelectors.complemento.val(model.cep.complemento)

        } catch (error) {
           console.error(error)
        }

        view.renderSuccess()

    }
}