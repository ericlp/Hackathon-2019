function handleUpdated(activeInfo) {
  console.log("Tab " + activeInfo.tabId);
}

browser.tabs.onActivated.addListener(handleUpdated);
