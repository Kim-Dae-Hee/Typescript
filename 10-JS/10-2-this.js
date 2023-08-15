
class Counter {
  count = 0;
  // this를 정적으로 할당하는 방법 2
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
// counter.increase();

// this 정적으로 할당하는 방법 1
// const caller = counter.increase.bind(counter);
const caller = counter.increase;
caller();







