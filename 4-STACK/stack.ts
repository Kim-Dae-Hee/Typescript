interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }

  push(value: string): void {
    const node: StackNode = {value, next: this.head};
    this.head = node;
    this._size++;
  }
  
  pop(): string {
    if(this.head == null) { // null == undefined
      throw new Error('Stack is empty!');
    }
    const value = this.head?.value;
    this.head = this.head?.next;
    this._size--;
    
    return value;
  }
}

const stack = new StackImpl();
stack.push('Elli 1');
stack.push('Bob 2');
stack.push('Steve 3');

while(stack.size > 0) {
  console.log(stack.pop());
}













