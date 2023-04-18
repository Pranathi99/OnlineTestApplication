var questions = [
  {
    question: "What does HTML stand for?",
    options: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HomeTool Markup Language", correct: false },
      { text: "HyperText Makeup Language", correct: false },
      { text: "HyperLinks and Text Markup Language", correct: false },
    ],
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: [
      { text: "&lt;head&gt;", correct: false },
      { text: "&lt;h6&gt;", correct: false },
      { text: "&lt;h1&gt;", correct: true },
      { text: "&lt;heading&gt;", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    options: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Computer Style Sheets", correct: false },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      { text: "&lt;head&gt; section", correct: false },
      { text: "&lt;body&gt; section", correct: false },
      { text: "Both &lt;head&gt; and &lt;body&gt; sections", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      { text: "&lt;break&gt;", correct: false },
      { text: "&lt;br&gt;", correct: true },
      { text: "&lt;brk&gt;", correct: false },
      { text: "&lt;bl&gt;", correct: false },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      { text: "msgBox('HelloWorld')", correct: false },
      { text: "msg('HelloWorld')", correct: false },
      { text: "alert('HelloWorld')", correct: true },
      { text: "alertBox('HelloWorld')", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      {
        text: "&lt;a url='www.examplesite.com'&gt;ExampleSite&lt;/a&gt;",
        correct: false,
      },
      {
        text: "&lt;a href='www.examplesite.com'&gt;ExampleSite&lt;/a&gt;",
        correct: true,
      },
      {
        text: "&lt;a name='www.examplesite.com'&gt;ExampleSite&lt;/a&gt;",
        correct: false,
      },
      { text: "&lt;a&gt;ExampleSite&lt;/a&gt;", correct: false },
    ],
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      { text: "text-transform:capitalize", correct: true },
      { text: "text-style:capitalize", correct: false },
      { text: "transform:capitalize", correct: false },
      { text: "You can't do that with CSS", correct: false },
    ],
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      { text: 'var colors=["red","green","blue"]', correct: true },
      { text: 'var colors="red","green","blue"', correct: false },
      { text: 'var colors=(1:"red",2:"green",3:"blue")', correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: [
      { text: "style", correct: true },
      { text: "styles", correct: false },
      { text: "font", correct: false },
      { text: "class", correct: false },
    ],
  },
];
