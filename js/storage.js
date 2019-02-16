function initStorage() {
  browser.storage.local.set({
    time: null,
    websites: []
  });
}

function getInterval() {
  return browser.storage.local
    .get("time")
    .then(success("Getinterval"), onError("Getinterval"));
}

/*
function setInterval(start, end) {
  let time = {
    start: start,
    end: end
  };
  browser.storage.local
    .set({time,getWebsites()})
    .then(success("Setinterval"), onError("Setinterval"));
}

function getWebsites() {
  return browser.storage.local
    .get("websites")
    .then(success("Getwebsite"), onError("Getwebsite"));
}

function addWebsite(w) {
  let website = { hostname: w };
  let content = browser.storage.local.get(getWebsites);
  content.push(website);
  browser.storage.local
    .set({getInterval(), content})
    .then(success("Addwebsite"), onError("Addwebsite"));
}
*/

function exists(w) {
  return Object.values(getWebsites()).some(s => s === w);
}

function success(s) {
  console.log("success", s);
}

function onError(e) {
  console.log("Error", e);
}
