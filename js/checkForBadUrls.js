function getHostname(url) {
  if (url == null) {
    return null;
  }

  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] == "string" &&
    match[2].length > 0
  ) {
    return match[2];
  }
  return null;
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (tabInfo == null) {
    return;
  }

  var hostname = getHostname(tabInfo.url);
  if (hostname != null) {
    if (hostname == "chalmers.it") {
      console.log("SHOULD CLOSE YE FUCK!" + tabInfo.tabId);
      browser.tabs.remove(tabInfo.id);
    }
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
