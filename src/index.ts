import {useEffect, useState} from 'react';
import {Readable, Writable} from 'svelte/store';
import {get, readable, writable} from 'svelte/store';

export type Setter<T> = (v: T) => void;
export type UpdateFn<T> = (v: T) => T;
export type Updater<T> = (u: UpdateFn<T>) => void;

const unset: any = Symbol();

export function useReadable<T>(store: Readable<T>): T {
  const [value, set] = useState<T>((unset as unknown) as T);

  useEffect(() => store.subscribe(set), [store]);

  return value === unset ? get(store) : value;
}

export function useWritable<T>(store: Writable<T>): [T, Setter<T>, Updater<T>] {
  const value = useReadable(store);
  return [ value, store.set, store.update ];
}

export { readable, writable };