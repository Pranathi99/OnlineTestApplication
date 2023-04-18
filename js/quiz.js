var crctAns = [1, 3, 2, 3, 2, 3, 2, 1, 1, 1];
var userAns = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

//default question
getQuestion(1);

function getQuestion(elementId) {
  var question = questions[elementId - 1].question;
  var choices = questions[elementId - 1].options;
  var htmlStr = "";
  document.getElementById("question").innerHTML = "<p>" + question + "</p>";
  htmlStr += "<p>Choose one option:</p>";
  if (userAns[elementId - 1] == 1)
    var option1 =
      '<label><input type="radio" name="option" id="option1" onclick="saveAns(this.id)" checked>' +
      choices[0].text +
      "</label>";
  else
    var option1 =
      '<label><input type="radio" name="option" id="option1" onclick="saveAns(this.id)">' +
      choices[0].text +
      "</label>";
  if (userAns[elementId - 1] == 2)
    var option2 =
      '<br/><label><input type="radio" name="option" id="option2" onclick="saveAns(this.id)" checked>' +
      choices[1].text +
      "</label>";
  else
    var option2 =
      '<br/><label><input type="radio" name="option" id="option2" onclick="saveAns(this.id)">' +
      choices[1].text +
      "</label>";
  if (userAns[elementId - 1] == 3)
    var option3 =
      '<br/><label><input type="radio" name="option" id="option3" onclick="saveAns(this.id)" checked>' +
      choices[2].text +
      "</label>";
  else
    var option3 =
      '<br/><label><input type="radio" name="option" id="option3" onclick="saveAns(this.id)">' +
      choices[2].text +
      "</label>";
  if (userAns[elementId - 1] == 4)
    var option4 =
      '<br/><label><input type="radio" name="option" id="option4" onclick="saveAns(this.id)" checked>' +
      choices[3].text +
      "</label><br/>";
  else
    var option4 =
      '<br/><label><input type="radio" name="option" id="option4" onclick="saveAns(this.id)">' +
      choices[3].text +
      "</label><br/>";
  console.log(htmlStr + option1 + option2 + option3 + option4);
  document.getElementById("choices").innerHTML =
    htmlStr + option1 + option2 + option3 + option4;
  document.getElementById("qNo").innerHTML =
    '<h5 id="questionNo">Question no: ' + elementId + "</h5>";
  updateButtons(elementId);
}

function updateButtons(currentQuestion) {
  var submitButton = document.getElementById("submit");
  var nextButton = document.getElementById("next");
  var backButton = document.getElementById("back");

  if (currentQuestion == 10) {
    // enable submit button and disable next button
    submitButton.disabled = false;
    nextButton.disabled = true;
  } else {
    // disable submit button and enable next button
    if (currentQuestion == 1) {
      backButton.disabled = true;
    } else {
      backButton.disabled = false;
    }
    submitButton.disabled = true;
    nextButton.disabled = false;
  }
}

function saveAns(optionId) {
  var id = document.getElementById("questionNo").innerHTML;
  var qNo = parseInt(id.match(/\d+/));
  var optNo = parseInt(optionId.match(/\d+/));
  userAns[qNo - 1] = optNo;
}

function onNext() {
  var id = document.getElementById("questionNo").innerHTML;
  var qNo = parseInt(id.match(/\d+/));
  if (qNo < 10) {
    qNo++;
    getQuestion(qNo);
  }
}

function onBack() {
  var id = document.getElementById("questionNo").innerHTML;
  var qNo = parseInt(id.match(/\d+/));
  if (qNo > 1) {
    qNo--;
    getQuestion(qNo);
  }
}

var totalScore = 0;
function onSubmit() {
  for (var x = 0; x < 10; x++) {
    if (questions[x].options[userAns[x] - 1].correct) totalScore++;
  }

  window.location.href =
    "result.html?score=" +
    totalScore +
    "&userAns=" +
    encodeURIComponent(JSON.stringify(userAns));
}
