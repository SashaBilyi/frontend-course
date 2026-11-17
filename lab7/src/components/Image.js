import React, { useState } from 'react';

function Image() {
  const [isVisible, setIsVisible] = useState(true);
  const [imgWidth, setImgWidth] = useState(600);

  const handleAdd = () => setIsVisible(true);
  const handleDelete = () => setIsVisible(false);
  
  const handleIncrease = () => {
    if (isVisible) setImgWidth(prev => prev + 50);
  };
  
  const handleDecrease = () => {
    if (isVisible && imgWidth > 50) setImgWidth(prev => prev - 50);
  };

  return (
    <div>
      <div style={{ minHeight: '200px' }}>
        {isVisible && (
          <a href="https://city-adm.lviv.ua/" target="_blank" rel="noreferrer">
            <img 
              src="https://visitlviv.net/wp-content/uploads/2023/11/lviv-313.webp" 
              alt="Панорама міста Львів" 
              width={imgWidth} 
            />
          </a>
        )}
      </div>

      <div className="controls">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleIncrease}>Збільшити</button>
        <button onClick={handleDecrease}>Зменшити</button>
        <button onClick={handleDelete}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;