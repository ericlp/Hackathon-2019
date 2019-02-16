if (chrome) {
  chrome.runtime.onInstalled.addListener(onInstalled);
} else {
  browser.runtime.onInstalled.addListener(onInstalled);
  browser.tabs.create({
    active: true,
    index: 0,
    url: "http://www.google.com"
  });
}

function onInstalled() {}

function thatFunction() {
  alert("DerP!");
}
