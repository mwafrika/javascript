function check2() {
let all = true,seat;
   for (seat = 1; seat<36; seat++){
 if(document.getElementById("s"+seat).value < document.getElementById("s"+(seat+1)).value){
       document.getElementById("se"+(seat+1)).style.background="green";
     } else {
       all = false;
        document.getElementById("se"+(seat+1)).style.background="red";
     }
  }
  return all;
   }
