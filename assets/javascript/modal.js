const click_model1 = document.querySelectorAll('.auth-form')[0];
const click_model2 = document.querySelectorAll('.auth-form')[1];
const modal = document.querySelector('.modal');
const login = document.querySelector('.navbar_login');
const regis = document.querySelector('.navbar_register');
// click vào đăng nhập ở form đăng nhập sẽ đóng lại
const close = document.querySelector('.js-model-close');
// click vào đăng lý ở from đang ký
const close_regis = document.querySelector('.js-Exit');


// login
login.addEventListener('click', showing_up);
function showing_up(){
    modal.classList.remove('active');
    click_model2.classList.add('active');
}




// close khi click vào button đăng nhập
close.addEventListener('click', login_close);
function login_close() {
    modal.classList.add('active');
    click_model2.classList.remove('active');

}

// regis
regis.addEventListener('click', dangky);
function dangky() {
    modal.classList.remove('active');
    click_model1.classList.add('active');
}


// close khi click vào button đăng ký
close_regis.addEventListener('click', login_Exit)
function login_Exit() {
    modal.classList.add('active');
    click_model1.classList.remove('active');

}