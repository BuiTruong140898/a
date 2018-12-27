function Chon(){
   var a=document.getElementById("form1");
   var b=document.forms[1];
   text1="Sở thích cá nhân: ";
   for(var i=1; i<a.length; i++)
   {
       if(a[i].checked){
       text1+=a[i].value+", ";}
   }
   text2="Màu sắc bạn thích nhất: ";
   for(var i=1; i<b.length; i++)
   {
       if(b[i].checked){
       text2+=b[i].value+", ";}
   }
   text=text1+"  "+text2;
   alert(text);
  
   //alert(b[1].value);

}