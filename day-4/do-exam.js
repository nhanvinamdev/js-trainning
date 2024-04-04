// Yêu cầu:

// Tạo 1 biến điểm trung binh sinh viên và kiểm tra sinh viên đó
// là học sinh gì
// (9 - 10: học sinh giỏi)
// (6 - 8: học sinh khá)
// (4- 5: trung bình)
// còn lại là yếu
// in ra console là học sinh gì

// if else và swich case

var detectGradeWithConditionIf = function () {
  var grade = 9.1;
  // ) (
  if (grade < 0 || grade > 10) return console.log("Không có điểm này");

  // [9 10]
  if (grade >= 9 && grade <= 10) {
    console.log("Học sinh giỏi");
    // [6 9)
  } else if (grade >= 6 && grade < 9) {
    console.log("Học sinh khá");
    // [4 6)
  } else if (grade >= 4 && grade < 6) {
    console.log("Học sinh trung bình");
    // [0 4)
  } else {
    console.log("Học sinh yếu");
  }
};

// detectGradeWithConditionIf();

// var a = 1

// switch (a) {
//   case 1:
//     // a = 1 chạy vô đây nè
//     break;

//   default:
//     break;
// }

var detectGradeWithConditionSwichCase = function () {
  var grade = 4.1;

  //
  switch (true) {
    case grade < 0 || grade > 10: {
      console.log("Không có điểm này");
      return;
    }
    case grade >= 9 && grade <= 10: {
      console.log("Học sinh giỏi");
      return;
    }
    case grade >= 6 && grade < 9: {
      console.log("Học sinh khá");
      return;
    }
    case grade >= 4 && grade < 6: {
      console.log("Học sinh trung bình");
      return;
    }
    default: {
      console.log("Học sinh yếu");
    }
  }
};

detectGradeWithConditionSwichCase();
