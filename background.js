

console.log("Background running...");
chrome.runtime.onMessage.addListener(receiver);
window.text = '';
function receiver(request,sender,sendResponse){
  console.log(request.txt);
  window.text = request.txt;
}