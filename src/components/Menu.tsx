// components/Menu.tsx
import React from 'react';
import MenuCategory from './MenuCategory.tsx';
import { menuData } from '../data/menuData';

const Menu: React.FC = () => {
  const data = menuData;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div id="menu" className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-red-700 sm:text-4xl">Our Menu</h1>
        </div>
        {Object.keys(data).map((category) => (
          <MenuCategory
            key={data[category].id}
            id={data[category].id}
            title={category}
            items={data[category].items}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
