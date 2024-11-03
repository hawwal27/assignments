const students = {
    "David": 80,
    "Vinoth": 77,
    "Divya": 88,
    "Ishitha": 95,
    "Thomas": 68
};

let totalMarks = 0;
let count = 0;

for (const mark of Object.values(students)) {
    totalMarks += mark;
    count++;
}