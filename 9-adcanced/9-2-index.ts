{
  const obj = {
    name: 'ellie'
  }

  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];
  const text: Name = 'hello';
  
  

}