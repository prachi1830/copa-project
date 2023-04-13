const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');

registerlink.onclick = () => {
    wrapper.classList.add('active');
}
