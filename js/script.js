console.log("yayyyy!");

var sub = document.querySelector("#subject");
var sco = document.querySelector("#score");
var gra = document.querySelector("#grade");
var gen = document.querySelector("#generate");
var list = document.querySelector("#list");
let studentarray = [];


// var div1 = document.querySelector("#div1");
// var div2 = document.querySelector("#div2");
// var div3 = document.querySelector("#div3");

// var additem = document.querySelector("#additem");


var clear= document.querySelector("#clear");
var calc = document.querySelector("#calcCGPA");
var row = document.querySelector("#NewRow");
var warn = document.querySelector("#Warning");
var cgpa = document.querySelector("#cgpa");
// let GradeArray = [];


gen.addEventListener('click', (e) => {
    e.preventDefault();
    
 if (sub.value == "" || sco.value == "") {
    warn.innerHTML = "you must input a subject and a score";
   cgpa.innerHTML = "";
   
 } else {
    
        if (sco.value <= 35) {gra.value = "F"}
   else if (sco.value <= 40 && sco.value > 35) {gra.value = "E"}
   else if (sco.value <= 50 && sco.value > 40) {gra.value = "D"}
   else if (sco.value <= 60 && sco.value > 50) {gra.value = "C"}
   else if (sco.value <= 70 && sco.value > 60) {gra.value = "B"}
   else if (sco.value <= 100 && sco.value > 70) {gra.value = "A"}
      else{ warn.innerHTML = "invalid input, Grade must be a value from one to one hundred";
           cgpa.innerHTML = "";
    
     return false;
   }

   
   studentinfo = {studentcoursevalue:sub.value, studentscorevalue:sco.value, studentgradevalue:gra.value}
   studentarray.push(studentinfo);
   
   oya();
      warn.innerHTML = "";
   cgpa.innerHTML = "";

      //  sub.value = "";
      //  sco.value = "";
      // gra.value = "";
   
 }  } 
 
)

function oya() {
   // additem.addEventListener('click', (e) => {
   //    e.preventDefault();
     
   
   
      var li = document.createElement('li');
     
       li.innerHTML = sub.value;
       list.appendChild(li);
       sub.value="";
      
    
       var span = document.createElement("span");
      span.className = "stylescore"; 
     
       span.innerHTML = sco.value;
       
      
       li.appendChild(span);
      
       sco.value="";
   
   
       var spantwo = document.createElement("span");
       spantwo.className = "stylescoretwo"; 
     
        spantwo.innerHTML = gra.value;
        
       
        li.appendChild(spantwo);
       
       
         // for (let i = 0; i < close.length; i++) {
          
         //   close[i].onclick = function() {
         //     var div = this.parentElement;
         //     div.style.display = "none";
         //      }
         // }   
   //  }
   //  )  
}

clear.addEventListener('click', (e) => {
   e.preventDefault();
  
sub.value  = "";
sco.value  = "";
gra.value  = "";
list.innerHTML = "";
warn.innerHTML = "";
  cgpa.innerHTML = "";
})

calc.addEventListener('click', (e) => {
   e.preventDefault();
   console.log(studentarray);
   cgpa.innerHTML = "Coming soon!";
   warn.innerHTML = "";
})


