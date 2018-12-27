function timthu(){
    var form=document.forms[0];
    ngay=parseInt(form[1].value);
    thang=parseInt(form[2].value);
    nam=parseInt(form[3].value);
    ngaymax=0;
    if (nam<0 || thang<0 || thang> 12 || ngay<0 || ngay> 31)
    {
        document.getElementById("hienthi").innerHTML="Ngay khong hop le !";
    }
    else
    {
        switch (thang)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
              ngaymax=31;
              break;
            case 2:
                if ((nam%4==0 && nam%100!=0) || (nam%400==0))
                    ngaymax=29;
                else 
                    ngaymax=28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                ngaymax=30;
                break;
        }
        
        if (ngay<=ngaymax)
        {
            var date=new Date(nam,thang-1, ngay);//because in js the month is 0 to 11
    var so= date.getDay();
    var thu=[ "chủ nhật", 'thứ hai', 'thứ ba', 'thứ tư', "thứ năm", "thứ sáu", "thứ bảy" ];
            document.getElementById("hienthi").innerHTML='Ngay '+form[1].value+' thang '+form[2].value+" nam "+form[3].value+' la ngay '+thu[so];
        }
        else
        {
            document.getElementById("hienthi").innerHTML="Ngay khong hop le !";
        }
    }
    
    
}
