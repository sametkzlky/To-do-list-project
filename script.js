const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", btnclick);
list.addEventListener("click", listclick)

function btnclick() {
  var txt = input.value;
  if (txt == "") {
    alert("you must write somethink");
  } else {
    li = document.createElement("li");
    li.classList.add("element-group_list_item");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
  }
}

function listclick(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
}