browser.runtime.onMessage.addListener(message => {
  if (message.command === "insult") {
    console.log("Derp");
  }
});
