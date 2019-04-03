
function check2() {

  let seat;

let all = true;

   for (seat = 1; seat<36; seat++){
  // if(seat % 6 == 1){
  //    document.getElementById("se"+seat).style.background="green";
  //   document.getElementById("r"+seat).innerHTML="yes";
  // }
 if(document.getElementById("s"+seat).value < document.getElementById("s"+(seat+1)).value){
       document.getElementById("se"+(seat+1)).style.background="green";
       document.getElementById("r"+(seat+1)).innerHTML="yes";

       // body+= document.innerHTML("<td>"+Not+"</td>");
     } else {
       all = false;
        document.getElementById("se"+(seat+1)).style.background="red";
        document.getElementById("r"+(seat+1)).innerHTML = "no";
     }
  }
  return all;
   }
//  document.getElementById("result").innerHTML =all;


// for(let tab=0;tab<36;tab++){

// }
//<button onclick="check2()" type="submit" style="font-size:22px;">Submit</butt
