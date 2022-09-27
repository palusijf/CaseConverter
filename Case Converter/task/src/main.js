let text = document.querySelector("textarea");
document.getElementById("upper-case").addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function () {
    text.value = text.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function () {
    let str = text.value.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    text.value = str.join(' ');
});
document.getElementById("sentence-case").addEventListener("click", function () {
    let str = text.value.toLowerCase().split('. ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    text.value = str.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let myText = document.querySelector("textarea").value;
    download("text.txt", myText);
});
