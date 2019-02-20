import React from 'react';

const Item = (props) => {
  const { name, index, referenceToDeleteFunction } = props;
  
  return (
    <div>
      {name}
      <button 
        onClick={() => {
          referenceToDeleteFunction(index);
        }}
      >
        delete
      </button>
    </div>
  )
}

export default Item;
