var input = document.querySelector("#txtarea-input");
var btntranslate = document.querySelector("#button-translate");
var output = document.querySelector("#txtarea-output");

function clickHandler() {
    console.log(input.value);
    console.log(output);
}

btntranslate.addEventListener("click",clickHandler);

