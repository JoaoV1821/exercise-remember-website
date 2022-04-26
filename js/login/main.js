const selectors = {};
const buttom = $('#submit');

selectors.email = $('#email');
selectors.senha = $('#senha');

const controller = new LoginController(selectors);

buttom.click((event) => {
    event.preventDefault();
    console.log('oi');

    controller.login();
});