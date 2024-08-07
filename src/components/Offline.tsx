import React from 'react';
import { offlineItems } from '../data/offlineItems';

export default function Offline() {
  return (
    <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {offlineItems.map((category) => (
              <div key={category.name}>
                <h2 className="text-lg font-semibold leading-6 text-gray-900 mt-6">{category.name}</h2>
                <table className="min-w-full divide-y divide-gray-300 mt-2">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        style={{ width: '30%' }}
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        style={{ width: '50%' }}
                      >
                        Ingredients
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        style={{ width: '20%' }}
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {category.items.map((item) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{item.item}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.ingredients}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
