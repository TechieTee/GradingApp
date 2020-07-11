

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector("#list")
var additem = document.querySelector(".addItem");
additem.addEventListener('click', (e) => {
  e.preventDefault();
  var li = document.createElement('li');
  var newitem = document.querySelector("#newItem");
   li.innerHTML = newitem.value;
   list.appendChild(li);
   newitem.value="";

   var span = document.createElement("span");
   var x = document.createElement("IMG");
   x.setAttribute("src", "images/delete2.png");
   x.setAttribute("width", "20");
   x.setAttribute("height", "20");
   x.setAttribute("alt", "delete-item");
   //var txt= document.createTextNode("m");
   span.className = "close"; 
   span.appendChild(x);
   li.appendChild(span);
     for (let i = 0; i < close.length; i++) {
      
       close[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
         
       }
      
       
     }
     
}
)