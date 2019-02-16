browser.runtime.onMessage.addListener(message => {
  if (message.command === "insult") {
    insult();
  }
});

function insult() {
  let myArray = browser.extension.getURL("../insults.json");
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  alert(rand);
}
