{
  // // JS
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JS
  // function jsFectNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // //TS
  // function fetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // JS
  // // Optional parameter
  // function printName(firstName: string, lastName?: string) {
  //   console.log(firstName);
  //   console.log(lastName);
  // }

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));

}


