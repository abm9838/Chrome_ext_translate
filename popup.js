
let bgpage = chrome.extension.getBackgroundPage();
console.log(bgpage);
let x = document.getElementById("translated");
x.innerText = "Selected Text : "+bgpage.text;

// Use translate api to translate word here.
// and show it