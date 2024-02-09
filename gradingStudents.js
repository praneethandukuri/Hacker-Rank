const getGradeRound = function (grade) {
  const reminder = grade % 5;
  return reminder > 0 ? grade + (5 - reminder) : grade
}
const gradingStudents = function (grades) {
  const studentRoundGrades = [];
  grades.forEach(grade => {
    if (grade < 37 || grade % 5 < 3) {
      studentRoundGrades.push(grade);
    } else {
      studentRoundGrades.push(getGradeRound(grade));
    }
  });
  return studentRoundGrades;
}
const studentGrades = [73, 67, 38, 33];
console.log(gradingStudents(studentGrades));