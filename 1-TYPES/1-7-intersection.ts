{
  /**
   * Intersection Types: &
   * 다양한 타입들을 하나로 묶어서 표현이 가능하다.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId);
  }

  internWork({
    name:'daehee',
    score: 1,
    employeeId: 123,
    work: () => {},
  });

}