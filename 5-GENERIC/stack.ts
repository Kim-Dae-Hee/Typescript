interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
}

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }

  push(value: T): void {
    const node: StackNode<T> = {value, next: this.head};
    this.head = node;
    this._size++;
  }
  
  pop(): T {
    if(this.head == null) { // null == undefined
      throw new Error('Stack is empty!');
    }
    const value = this.head?.value;
    this.head = this.head?.next;
    this._size--;
    
    return value;
  }
}

const stack: Stack<string> = new StackImpl<string>();
stack.push('Elli 1');
stack.push('Bob 2');
stack.push('Steve 3');

while(stack.size > 0) {
  console.log(stack.pop());
}

const stack2: Stack<number> = new StackImpl<number>();
stack2.push(1);
stack2.push(2);
stack2.push(3);

while(stack2.size > 0) {
  console.log(stack2.pop());
}












