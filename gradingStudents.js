const getGradeRound = function (num) {
  const reminder = num % 5;
  return reminder > 0 ? num + (5 - reminder) : num
}
const gradingStudents = function (grades) {
  // Write your code here
  const studentGrades = [];
  grades.forEach(grade => {
    if (grade < 37 || grade % 5 < 3) {
      studentGrades.push(grade);
    } else {
      studentGrades.push(getGradeRound(grade));
    }
  });
  return studentGrades;
}
console.log(gradingStudents([73, 67, 38, 33]));