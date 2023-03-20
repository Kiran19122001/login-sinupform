const wrapper = document.querySelector('.wrapper')
const rigister_link = document.querySelector('.rigister-link')
const logini_link = document.querySelector('.login-link')
const logini_popup = document.querySelector('.btnLogin-popup')
const section=document.querySelector('.section')
const remove=document.querySelector('.close')
rigister_link.addEventListener('click', function () {
    wrapper.classList.add('active')
})
logini_link.addEventListener('click', function () {
    wrapper.classList.remove('active')
})
logini_popup.addEventListener('click', function () {
    wrapper.classList.add('active-popup')
})
remove.addEventListener('click', function () {
    wrapper.classList.remove('active-popup')
})
section.addEventListener('click', function () {
    section.classList.add('adjust')
})