import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

function App() {
  const goodsData = [
    { id: 1, image: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f34e.svg', name: 'Apple', price: 15 },
    { id: 2, image: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f350.svg', name: 'Pear', price: 20 },
    { id: 3, image: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f347.svg', name: 'Grape', price: 25 },
    { id: 4, image: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f351.svg', name: 'Peach', price: 18 },
    { id: 5, image: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f34c.svg', name: 'Banana', price: 30 },
    { id: 6, image: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f34a.svg', name: 'Orange', price: 22 }
  ];

  return (
    <div>
      <h2>Завдання 1</h2>
      <Header />
      <Content />
      <Image />
      
      
      <h2>Завдання 2: Галерея товарів</h2>
      <div className="gallery">
        {goodsData.map(item => (
          <GoodsCard 
            key={item.id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;