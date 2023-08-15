
type Student = {
  passed: boolean;
};

const students: Student[] = [{ passed: true }, { passed: true }];
const result = students.every(student => {
  return student.passed;
});

console.log(result);



