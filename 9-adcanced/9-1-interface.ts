{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  };

  // object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositonType = PositionType & { z: number };

  // Type aliases can use computed properties
  type Person = {
    name: string,
    age: Number
  }

  type Name = Person['name']; // string

}
