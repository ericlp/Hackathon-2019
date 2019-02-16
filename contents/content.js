browser.runtime.onMessage.addListener(message => {
  if (message.command === "insult") {
    insult();
  }
});

function insult() {
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  alert(rand);
}
