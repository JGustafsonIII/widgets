import React, { useState } from 'react';
//import Accordion from './Accordion';
//import Search from './Search';
import Dropdown from './Dropdown';
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className='App'>
      <button onClick={() => setShowDropdown(!showDropdown)}>Dropdown</button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
}

export default App;
