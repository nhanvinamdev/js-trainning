// Yêu cầu:

// Tạo 1 biến điểm trung binh sinh viên và kiểm tra sinh viên đó
// là học sinh gì
//(9 - 10: học sinh giỏi)
//(6 - 8: học sinh khá)
//(4- 5: trung bình)
// còn lại là yếu
// in ra console là học sinh gì

// if else và swich case
//1. if else

 var Diem=0;
if (Diem>8) 
{
    console.log("Nam la hoc sinh gioi")
}
 else if (Diem>6)
{
     console.log("Nam la hoc sinh kha")   
}
else if (Diem>3)
{
    console.log ("Nam la hoc sinh trung binh")
}
else console.log ("Nam la hoc sinh yeu")
//2. swith case
switch (Diem) {
      case (9,10): {
        console.log("Nam la hoc sinh gioi");
        break;
      }
    
      case (6,7,8): {
        console.log("Nam la hoc sinh kha");
        break;
      }
    
      case (4,5): {
        console.log("Nam la hoc sinh trung binh");
        break;
      }
      default :
      {console.log("Nam la hoc sinh yeu");
    break;}
    }