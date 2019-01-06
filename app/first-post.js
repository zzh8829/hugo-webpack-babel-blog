const date = new Date();
const div = document.createElement('div');
div.innerHTML = `<p> Today's Date is ${date} </p>`
document.getElementsByClassName("post")[0].appendChild(div);