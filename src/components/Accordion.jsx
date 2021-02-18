import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex({ activeIndex: index });
    console.log(activeIndex);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className='title active'>
          <i className='dropdown icon'> </i>
          {item.title}
          <div className='content active'>
            <p>{item.content}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
