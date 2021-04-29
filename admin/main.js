import dataGet from '../admin/adminModules/data.js'
const create = document.getElementById('create');
const saveButton = document.getElementById('add');
const editeTabak =document.getElementById('add1');
const changeAndCreate = document.getElementById('changeAndCreate');
create.addEventListener('click', () => {
    changeAndCreate.style.display = 'flex';
    saveButton.style.display = 'block';
    editeTabak.style.display = 'none';
    document.getElementById('tabakName').value = '';
    document.getElementById('description').value =  '';
    document.getElementById('photo').value = '';
})
dataGet()