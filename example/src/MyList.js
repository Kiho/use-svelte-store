import React from 'react';
import { useWritable } from 'use-svelte-store';
import { foos } from './stores/state';

const Foo = ({foo}) => {
  return (
      <div>
        {foo}
      </div>
  );
};

export const MyList = () => {
    const [$foos, setFoos, updateFoos] = useWritable(foos);
    const [val, setVal] = React.useState('');

    return (
        <div>
            <input value={val} onChange={(e) => {
              setVal(e.target.value);
              console.log('setVal', e.target.value);
            }} />
            <ul>
                {$foos.map((foo, ix) => (
                  <li key={foo}>
                    <Foo foo={foo} />
                  </li>
                ))}
            </ul>
            <button onClick={() => {
              updateFoos(oldFoos => {
                console.log('updateFoos', val);
                return [...oldFoos, val];
              });
            }}>Add</button>
            <button onClick={() => setFoos([])}>Clear</button>
        </div>
    );
};