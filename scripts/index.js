console.log('Hello JS!')

let count = 0

function changeAfterTime() {
    console.log("Test page change after 3 seconds")
    document.getElementById('change-text').innerHTML = 'This is webpage of Tien!'
}
setTimeout (changeAfterTime, 3000);

function increaseAfterTime() {
    console.log("Test page change after 3 seconds")
    count++;
    document.getElementById('change-count').innerHTML = count;
}
setInterval(increaseAfterTime, 1000);



function colorChangeAfterTime() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("Test page change after 3 seconds")
    document.getElementById('change-color').style.backgroundColor = "#" + randomColor;
    document.getElementById('change-color').innerHTML = "#" + randomColor;
}
setInterval(colorChangeAfterTime, 3000);

let clickCount = -1;
function clickOnPage () {
    clickCount++;
    document.getElementById('change-click').innerHTML = clickCount;

}
    document.getElementById('change-click').addEventListener('click', clickOnPage);


function mouseOnPage () {
        clickCount++;
        document.getElementById('change-hover').innerHTML = clickCount;
    
    }
     document.getElementById('change-hover').addEventListener('mouseover', mouseOnPage);

     let lovesMe = 0;
function loveOrNot () {
    lovesMe++;
    if (lovesMe % 2) {
    document.getElementById('change-he-loves-me').innerHTML = "She hates me";}
        else {document.getElementById('change-he-loves-me').innerHTML = "She hates me not!";}
    
}
document.getElementById('change-he-loves-me').addEventListener('click', loveOrNot);


function addCurrentDate() {
    let currentDate = new Date();
    document.getElementById('change-to-current-date').innerHTML = currentDate;
}
document.getElementById('change-to-current-date').addEventListener('click', addCurrentDate);

function screenSize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("change-to-current-width").innerHTML =
      "Width: " + w;
    document.getElementById("change-to-current-height").innerHTML =
      "Height: " + h;
  }

  window.onresize=screenSize;

let list = 1;
function addList() {
    list++;
    var node = document.createElement("li");
  var text = document.createTextNode(
    "This is a new li element number " + list);
    node.appendChild(text);

  document.getElementById("add-list-item").appendChild(node);
}
document.getElementById('add-list-item').addEventListener('click', addList)


function showUrl() {
        const url = window.location;
        document.getElementById("change-to-url").innerHTML = url;
}
document.getElementById('change-to-url').addEventListener('click', showUrl)


var i = 0;
  var txt = "Hello, I'm Tien from CoderSchool fgbjmx;ldfkgjbzlfkd";
  var speed = 20;

  function clickToWrite()  {
    if (i < txt.length) {
      document.getElementById("change-coderscript").innerHTML += txt.charAt(i);
      i++;}
      setTimeout(clickToWrite, speed);
}


document.getElementById('change-coderscript').addEventListener('click', clickToWrite);


function box1() {
    document.getElementById('signin-form').style.display = "none";
    document.getElementById('signout-form').style.display = "block";
}

document.getElementById('signin-button').addEventListener('click', box1);


function box2() {
    document.getElementById('signin-form').style.display = "block";
    document.getElementById('signout-form').style.display = "none";
}

document.getElementById('signout-button').addEventListener('click', box2);