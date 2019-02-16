console.log("Hej!");

function getHostname(url) {
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

var myelement = document.getElementById("productive");
myelement.onclick = function() {
  console.log("This still works...");
};

var inputText = document.getElementById("urlInput");
var submitButton = document.getElementById("submit");

submitButton.onclick = function() {
  console.log(
    inputText.value + " was parsed into: " + getHostname(inputText.value)
  );
};
