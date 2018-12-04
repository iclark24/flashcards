let cardsList = []
const cardA = makecard("James", "Woods", "SUCKS!")
const cardC = makecard("Title", "Question", "Answer")
const cardB = makecard("Sign", "Road Work Ahead?", "Uh, Yeah? I sure hope it does!")
let chosen = cardsList[Math.floor(Math.random()*cardsList.length)];
setfirstcard(chosen)

function defaultcards(){  
  cardsList = [
    cardA, cardB, cardC
  ]}

function makecard(title = [], question = [], answer = []){
  card = { title, question, answer }
  cardsList.push(card)
}

function setfirstcard(CC){
  document.getElementById("card").innerHTML = (
    `<h1>${CC.title}</h1>
    <p>${CC.question}</p>`
  );
}

function flip(CC){
  document.getElementById("card").innerHTML = (
    `<h1>${CC.title}</h1>
    <p>${CC.answer}</p>`
  );
  document.getElementById("card").setAttribute("onClick", "newcard()");

}

function newcard(){
  chosen = cardsList[Math.floor(Math.random()*cardsList.length)];
  document.getElementById("card").innerHTML = (
    `<h1>${chosen.title}</h1>
    <p>${chosen.question}</p>`
  );
  document.getElementById("card").setAttribute("onClick", "flip(chosen)");
}

function addcard(){
  document.getElementById("form").style.visibility = "visible";
}

function edit(){
  document.getElementById("eform").style.visibility = "visible";
}

function createcard(){
  event.preventDefault();
  title = document.getElementById("card-t").value
  question = document.getElementById("card-q").value
  answer = document.getElementById("card-a").value
  makecard(title, question, answer)
  document.getElementById("card-t").value = ""
  document.getElementById("card-q").value = ""
  document.getElementById("card-a").value = ""
  document.getElementById("form").style.visibility = "hidden";

}

function closeform(){
  event.preventDefault();
  document.getElementById("card-t").value = ""
  document.getElementById("card-q").value = ""
  document.getElementById("card-a").value = ""
  document.getElementById("form").style.visibility = "hidden";

}

function closeeform(){
  event.preventDefault();
  document.getElementById("ecard-t").value = ""
  document.getElementById("ecard-q").value = ""
  document.getElementById("ecard-a").value = ""
  document.getElementById("eform").style.visibility = "hidden";

}

function editcard(){
  event.preventDefault();
  title = document.getElementById("ecard-t").value
  question = document.getElementById("ecard-q").value
  answer = document.getElementById("ecard-a").value
  var ecard = { title, question, answer }
  var index =  cardsList.indexOf(chosen)
  cardsList[index] = ecard
  document.getElementById("ecard-t").value = ""
  document.getElementById("ecard-q").value = ""
  document.getElementById("ecard-a").value = ""
  document.getElementById("eform").style.visibility = "hidden";
  newcard()
}

function deletecard(){
  event.preventDefault();
  cardsList.shift(chosen)
  newcard()
}