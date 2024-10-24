type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

type SelectivePartial<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type OptionalCurryReturnType<Curry, ReturnType extends void = undefined> = Curry extends true
  ? () => ReturnType
  : ReturnType;

interface ArrayFilterCallback<T> {
  (value: T, index: number, array: T[]): boolean;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
