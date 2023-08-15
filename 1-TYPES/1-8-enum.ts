{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const DAYS_ENUM = Object.freeze({ 'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2 });

  // TypeScript - 사용하지 않는게 좋다.
  // => enum으로 지정된 변수에 다른 숫자를 할당할 수도 있다.
  enum Days {
    Monday = 0,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sonday
  }

  console.log(Days.Monday);
  console.log(Days.Tuesday);
  let day: Days = Days.Friday;
  
}