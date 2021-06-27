# use-svelte-store
This is fork of [react-use-svelte-store](https://github.com/Crisfole/react-use-svelte-store) but you don't need svelte in dependency, just do `npm install use-svelte-store`, play with [example](https://github.com/Kiho/use-svelte-store/tree/main/example), you can find more details from original project [react-use-svelte-store](https://github.com/Crisfole/react-use-svelte-store).


## How do I get started?

I'm assuming you have react installed. If not, well, figuring that out is on you.

 1. `npm install use-svelte-store`
 2. Create a file `stores.ts`.
 3. Create a svelte store: `export const foos = writable<Foo[]>([]);`
 4. Use the store in a component: `const $foos = useReadable(foos);`
 5. Update the store in a component: `foos.update(f => f.concat(new Foo()))`

