// student score - total score
// 15/20 - you got a C(75%)
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, E: 0-59

function gradeCalc(studentScore, maxScore) {
  let grade
  let gradePercent = Math.round((studentScore / maxScore) * 100)
  if (gradePercent > 89) {
    grade = 'A'
  } else if (gradePercent <= 89 && gradePercent >= 80) {
    grade = 'B'
  } else if (gradePercent <= 79 && gradePercent >= 70) {
    grade = 'C'
  } else if (gradePercent <= 69 && gradePercent >= 60) {
    grade = 'D'
  } else {
    grade = 'E'
  }

  return `${studentScore}/${maxScore} - You got grade: ${grade}(${gradePercent}%)`
}

gradeMessage = gradeCalc(476, 534)
console.log(gradeMessage)
