
console.log("conent JS Running");

window.addEventListener('mouseup',getSelectedText);

function getSelectedText(){
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if(selectedText.length >0){
    //send value to Background
    let msg = {
      txt : selectedText
    };
    chrome.runtime.sendMessage(msg);

  }
}

