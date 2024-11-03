const average = totalMarks / count;
let grade;

if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else {
    grade = "A";
}

console.log(`Average: ${average}, Grade: ${grade}`);
