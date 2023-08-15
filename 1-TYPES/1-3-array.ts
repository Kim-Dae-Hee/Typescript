{
  // Array
  const fruits: string[] = ['토마토', '바나나'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123

  const [name, age] = student;

}