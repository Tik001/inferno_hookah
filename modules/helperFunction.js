function childeHtml(a, b, c, d) {
    a.appendChild(b);
    if (c) {
        b.appendChild(c);
    }
    if (d) {
        b.appendChild(d);
    }
}
function element(nameTag, nameClass, id, writeOnHtml, sRc) {
    const c = document.createElement(nameTag);
    if (id) {
        c.id = nameClass;
    } else {
        c.className = nameClass;
    };
    if (writeOnHtml) {
        c.innerHTML = writeOnHtml;
    };
    if (sRc) {
        c.src = sRc
    };
    return c
}
export {
    childeHtml,
    element
}