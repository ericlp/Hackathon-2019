if (chrome) {
  chrome.runtime.onInstalled.addListener(onInstalled);
} else {
  BhxBrowser.runtime.onInstalled.addListener(onInstalled);
}

function onInstalled() {}
