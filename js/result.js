var urlParams = new URLSearchParams(window.location.search);
var totalScore = urlParams.get("score");

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

var userChoices = JSON.parse(getQueryStringValue("userAns"));

document.getElementById("score").innerHTML =
  "<h3>Total Score : " + totalScore + "</h3>";

var result = "";
for (var x = 0; x < 10; x++) {
  var ques = questions[x].question;
  var choices = questions[x].options;
  console.log(ques);
  console.log(choices);
  result += "<p>" + ques + "</p>";
  var option = ["", "", "", "", ""];
  option[1] =
    '<label><input type="radio" id="option1" disabled/>' +
    choices[0].text +
    "</label>";
  option[2] =
    '<label><input type="radio" id="option2" disabled/>' +
    choices[1].text +
    "</label>";
  option[3] =
    '<label><input type="radio" id="option3" disabled/>' +
    choices[2].text +
    "</label>";
  option[4] =
    '<label><input type="radio" id="option4" disabled/>' +
    choices[3].text +
    "</label>";

  console.log(userChoices[x]);
  if (userChoices[x] == 1) {
    console.log(1);
    if (crctAns[x] == 1) {
      option[1] =
        '<label style="background-color:lightgreen"><input type="radio" id="option1" checked>' +
        choices[0].text +
        "</label>";
    } else {
      option[1] =
        '<label style="background-color:#FF9494"><input type="radio" id="option1" checked>' +
        choices[0].text +
        "</label>";
      option[crctAns[x]] =
        '<label style="background-color:lightgreen"><input type="radio" id="option' +
        crctAns[x] +
        '" disabled>' +
        choices[crctAns[x] - 1].text +
        "</label>";
    }
  } else if (userChoices[x] == 2) {
    console.log(2);
    if (crctAns[x] == 2) {
      option[2] =
        '<label style="background-color:lightgreen"><input type="radio" id="option2" checked>' +
        choices[1].text +
        "</label>";
    } else {
      console.log(choices);
      option[2] =
        '<label style="background-color:#FF9494"><input type="radio" id="option2" checked>' +
        choices[1].text +
        "</label>";
      option[crctAns[x]] =
        '<label style="background-color:lightgreen"><input type="radio" id="option' +
        crctAns[x] +
        '" disabled>' +
        choices[crctAns[x] - 1].text +
        "</label>";
    }
    console.log(option);
  } else if (userChoices[x] == 3) {
    console.log(3);
    if (crctAns[x] == 3) {
      option[3] =
        '<label style="background-color:lightgreen"><input type="radio" id="option3" checked>' +
        choices[2].text +
        "</label>";
    } else {
      option[3] =
        '<label style="background-color:#FF9494"><input type="radio" id="option3" checked>' +
        choices[2].text +
        "</label>";
      option[crctAns[x]] =
        '<label style="background-color:lightgreen"><input type="radio" id="option' +
        crctAns[x] +
        '" disabled>' +
        choices[crctAns[x] - 1].text +
        "</label>";
    }
  } else {
    if (crctAns[x] == 4) {
      console.log(4);
      option[4] =
        '<label style="background-color:lightgreen"><input type="radio" id="option4" checked>' +
        choices[3].text +
        "</label>";
    } else {
      option[4] =
        '<label style="background-color:#FF9494"><input type="radio" id="option3" checked>' +
        choices[3].text +
        "</label>";
      option[crctAns[x]] =
        '<label style="background-color:lightgreen"><input type="radio" id="option' +
        crctAns[x] +
        '" disabled>' +
        choices[crctAns[x] - 1].text +
        "</label>";
    }
  }
  result +=
    option[1] +
    "<br/>" +
    option[2] +
    "<br/>" +
    option[3] +
    "<br/>" +
    option[4] +
    "<br/><br/>";
}

document.getElementById("result").innerHTML = result;

function goToHome() {
  location.replace("index.html");
}
