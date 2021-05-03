import { Readable, Writable, readable, writable } from 'svelte/store';
type Setter<T> = (v: T) => void;
type UpdateFn<T> = (v: T) => T;
type Updater<T> = (u: UpdateFn<T>) => void;
declare function useReadable<T>(store: Readable<T>): T;
declare function useWritable<T>(store: Writable<T>): [T, Setter<T>, Updater<T>];
export { Setter, UpdateFn, Updater, useReadable, useWritable, readable, writable };
