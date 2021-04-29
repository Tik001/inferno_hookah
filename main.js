import dataGet from './modules/modalWindow.js';
const modal = document.getElementById('modal');
const general = document.getElementById('general');

const generalModal = () => {
    modal.style.display = 'none';
    general.style.display = 'block';
};
setTimeout(generalModal, 2000);
dataGet()