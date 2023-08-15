{
  /**
   * Type Assertions
   */

  function jsStrFunc(): any {
    return 'hello'
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2); // !는 값이 확실하게 있다고 컴파러한테 알려줌

  const button = document.querySelector('.class')!;

}