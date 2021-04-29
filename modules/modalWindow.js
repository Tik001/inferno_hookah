import { childeHtml,element } from '../modules/helperFunction.js'

const database = firebase.database();
const tabak = database.ref('/tabak');

function dataGet(){ 
     (function () {
    const cols = document.querySelector('.cols');
    tabak.orderByKey().on('value', data => {
        cols.innerHTML = '';
        Object.entries(data.val()).map((data) => {
            const col = element('div', 'col');
            const container = element('div','container');
            const front = element('div','front');
            front.style.backgroundImage = `url('${data[1].photo}')`;
            const inner = element('div','inner');
            const innerP = element('p','innerP', 0, `${data[1].tabak_name}`);
            const back = element('div', 'back');
            back.style.backgroundImage = `url('${data[1].photo}')`;
            const innerBack = element('div','inner');
            const backP = element('p','backP', 0, `${data[1].description}`)
            childeHtml(col,container);
            childeHtml(container,front);
            childeHtml(front,inner,innerP);
            childeHtml(container,back,innerBack);
            childeHtml(innerBack,backP);
            childeHtml(cols,col); 
        })
    })
})()
}
export default dataGet;