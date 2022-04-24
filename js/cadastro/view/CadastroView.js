class CadastroView {
    renderError(menssage, id, input) {
        const newMenssage = menssage.replace('Error:', '')
        const msgId = $(`#${id}`);
        
        msgId.text(newMenssage);
        msgId.css('color', 'red')

        input.click(() => {
            msgId.text('');
        })
    };

    renderSuccess() {
    }
}