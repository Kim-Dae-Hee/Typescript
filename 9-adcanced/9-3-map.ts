type Video = {
  title: string;
  author: string;
  description: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P]
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: 'hi',
}

type Animal = {
  name: string;
  age: number;
}

const animal: Optional<Animal> = {
  name: 'dog',
}

type Nullable<T> = { [P in keyof T]: T[P] | null };











