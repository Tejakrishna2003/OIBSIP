function save() {
  event.preventDefault(); 

  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;

  var full = document.getElementById("full");
  var newDiv = document.createElement("div");

  newDiv.textContent = title + description;

  for (var i = 0; i <newDiv.childNodes.length; i++) {

//   newDiv.textContent = title + description;
  }

  // var checkbox = createElement("input");
  // checkbox.type = "checkbox";

  // var textElement = document.createElement("span");
  // textElement.textContent = title + description;

  // checkbox.classList.add("checked");

  var deletebutton = document.createElement("button");

  deletebutton.innerHTML = 'X';
  deletebutton.classList.add("delete-buttton");


  deletebutton.onclick = function (){
    full.removeChild(newDiv);
  }
  
  // newDiv.appendChild(checkbox);
  newDiv.appendChild(deletebutton);

  full.appendChild(newDiv);

  deletebutton.style.backgroundColor = 'red';
  deletebutton.style.border='none';
  deletebutton.style.float='right';

  document.getElementById("title").value = " ";
  document.getElementById("description").value = " ";
}