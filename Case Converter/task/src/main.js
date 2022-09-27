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

/*
 function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");
* */