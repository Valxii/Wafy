
window.ID = top.ID = ID => top.document.getElementById(ID);
window.QUERY = top.QUERY = SELECTOR => top.document.querySelector(SELECTOR);
window.QUERYALL = top.QUERYALL = ALL => top.document.querySelectorAll(ALL);
window.CLASSNAME = top.CLASSNAME = CLASS => top.document.getElementsByClassName(CLASS);
window.FORMAT_NUMBER = top.FORMAT_NUMBER = NUM => NUM.toLocaleString().replaceAll(",", " ");

function parsePageData(body) {
    const firstIndex = body.indexOf("options.bootstrap = {") + 20;
    const lastIndex = body.indexOf("};", firstIndex) + 1;
    const data = body.substring(firstIndex, lastIndex);
    return JSON.parse(data);
};
const pageData = parsePageData(QUERY("body > script").innerText);

function parseLocalStorage(path) {
    let object = localStorage.getItem(path);
    return JSON.parse(object);
};
const last_played = parseLocalStorage(["__amplify__cache:game:last-played"]).data;
const localData = parseLocalStorage([`__amplify__cache:notify:data:${pageData.current_user.id}`]).data;
