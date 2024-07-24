import React from 'react';
import { v4 as uuidv4 } from 'uuid';


interface MenuItem {
  category: string;
  description: string;
  prices: string;
  imageSrc: string;
  imageAlt: string;
}
interface MenuCategoryProps {
  id: string;
  title: string;
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ id, title, items }) => {

  return (
    <div id={id} className="mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {items.map((item) => (
          <div
            key={uuidv4()}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 hover:bg-green-50 transition duration-300 ease-in-out cursor-pointer"
            // onClick={() => openModal(item)}
          >
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
              </div>
            <h4 className="text-lg font-bold text-gray-900 mt-1">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {item.category}
            </h4>
            <p className="text-sm text-gray-500 mb-4">{item.description}</p>
            <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm font-medium text-gray-900">{item.prices}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
