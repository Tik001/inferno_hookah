import { childeHtml,element,deleteAndEdite, } from '../adminModules/functionsHelper.js'
const saveButton = document.getElementById('add');
const editeTabak =document.getElementById('add1');

const editeThisTabak = (data,id) => {
    changeAndCreate.style.display = 'flex';
    saveButton.style.display = 'none';
    editeTabak.style.display = 'block';
    document.getElementById('tabakName').value = `${id.tabak_name}`;
    document.getElementById('description').value = `${id.description}`;
    document.getElementById('photo').value = `${id.photo}`;
    editeTabak.addEventListener('click', () => {
        const tabakUpdate = {
            tabak_name: byId('tabakName'),
            description: byId('description'),
            photo: byId('photo')
        };
        tabak.child(data).update(tabakUpdate);
        document.querySelector('#changeAndCreate').style.display = 'none';
    });
}

const database = firebase.database();
const tabak = database.ref('/tabak');
const deleteThisTabak = (id) => {
    tabak.child(id).remove()
}
const byId = (id) => document.getElementById(id).value;
const addTabak = () => {
    const autoId = tabak.push().key;
    tabak.child(autoId).set({
        tabak_name: byId('tabakName'),
        description: byId('description'),
        photo: byId('photo')
    })
};

saveButton.addEventListener('click', addTabak);
dataGet()
function dataGet(){
    (function () {
        const tabaksList = document.getElementById('tabaksList');
        tabak.orderByKey().on('value', data => {
            tabaksList.innerHTML = '';
            Object.entries(data.val()).map((data) => {
                const div = element('div', 'tabakDive');
                const divDescr = element('div', 'divDescr');
                const tabakName = element('h1', 'tabakName',0,data[1].tabak_name);
                const tabakDescription = element('p', 'tabakDescription',0,data[1].description);
                const divPhoto = element('div', 'divPhoto');
                const tabakPhoto = element('img', 'tabakPhoto',0,0,data[1].photo);
                const buttonDiv = element('div', 'buttonDiv');
                const deletTabak = element('button', 'deletTabak',0,'Delete This Tabak');
                const editTabak = element('button', 'editTabak',0,'<a href="#changeAndCreate">Edite This Tabak</a>');
                childeHtml(div,divDescr,tabakName,tabakDescription);
                childeHtml(div,divPhoto,tabakPhoto);
                childeHtml(div,buttonDiv,deletTabak,editTabak)
                childeHtml(tabaksList,div);
                deleteAndEdite(deletTabak,deleteThisTabak,data[0]);
                deleteAndEdite(editTabak,editeThisTabak,data[0],data[1]);
                document.querySelector('#changeAndCreate').style.display = 'none';
            })
        })
    })()
}
export default dataGet;
// export {tabak}