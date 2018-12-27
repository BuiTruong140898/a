function nut1(){
  document.getElementById('danhsachchon').innerHTML='';
  var a=document.forms['thucdontiec'];
  var b=a['thucdon'];
  var i=0;
  while(b.length>i){
 
	
    if(b[i].selected)
    
        document.getElementById('danhsachchon').innerHTML+="<option>"+b[i].value+"</option>";
    i++;
  }
}
function nut2() {
  var a = document.forms["thucdontiec"];
  var b = a["thucdon"];
  var i = 0;
  document.getElementById('danhsachchon').innerHTML="";
  while (b.length > i) {
    document.getElementById("danhsachchon").innerHTML +="<option>"+b[i].value+"</option><BR/>";
    i++;
  }
}


function nut3(){

  var x = document.getElementById('danhsachchon');
    for(var i=x.length-1; i>=0; i--){
      if(x[i].selected){
      x.removeChild(x[i]);
    }
  }
  
}

function nut4() {
  document.getElementById('danhsachchon').innerHTML="";
 }
 function TinhTien(){
   var a=document.getElementById('danhsachchon');
   var sotien=a.length*10000;
   document.getElementById("sotien").innerHTML+=sotien;
  
     a=document.getElementById('tinhtien');
     a.style.display="none";

 }