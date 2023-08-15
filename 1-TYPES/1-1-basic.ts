{
  // JavaScript
  // Primitive: number, string, boolean, bigint, symbol, null, undefined
  // Object: function, array......

  // number
  const num:number = 0.1;

  // string
  const str:string = 'hello';

  // boolean
  const bool:boolean = true;

  // undefined
  let name:string | undefined;
  name = 'string test';

  // null
  let person:string | null;
  person = 'person';

  function find(): number | undefined {
    return 1;
  }

  // object
  let obj: object; // 사용하지 않는게 좋다.
  function acceptSomeObject(obj: Object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });

}