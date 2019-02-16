console.log("Hej!");

var inputText = document.getElementById("urlInput");
var submitButton = document.getElementById("submit");

submitButton.onclick = function() {
  console.log(
    inputText.value + " was parsed into: " + getHostname(inputText.value)
  );
};
