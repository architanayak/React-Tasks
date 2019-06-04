import React, { useState } from 'react';

export function HooksExState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('archi');
  const [list, setList] = useState([{ first: 'hello' }]);

  const addList = () => {
    setList([...list,
    {
      first: ' world'
    }
    ])
  }

  return (
    <div>
      <div>You clicked {count} times</div>
      <button onClick={() => setCount(count + 1)}>
        *set count*
      </button>
      <br /> <br />
      <div>You clicked {name}</div>
      <button onClick={() => setName(name + ' nayak')}>
        *set name*
      </button>
      <br /> <br />
      <div>You clicked {list.map(i => i.first)}</div>
      <button onClick={addList}>
        *set list*
      </button>
    </div>
  );
}

// var fruitStateVariable = useState('banana'); // Returns a pair
// console.log('fruitStateVariable :: ' , fruitStateVariable)
// var fruit = fruitStateVariable[0]; // First item in a pair
// var setFruit = fruitStateVariable[1]; // Second item in a pair


