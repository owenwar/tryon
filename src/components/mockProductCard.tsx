import React, { useState } from 'react';
import { MOCK_GARMENTS } from '../data/mockdata';

export function MockProductCardPage() {
  const [selectedIds, setSelectedIds] = useState<{ [key: string]: boolean }>({});

  const toggleSelect = (id: string) => {
    setSelectedIds(prevSelected => ({
      ...prevSelected,
      [id]: !prevSelected[id]
    }));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-3 gap-4">
        {MOCK_GARMENTS.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col items-center border p-4 rounded-xl ${
              selectedIds[product.id] ? 'bg-gray-500' : 'bg-white'
            } cursor-pointer`} // Updated for rounded edges and pointer
            onClick={() => toggleSelect(product.id)}
            style={{ color: 'black' }} // Inline style for text color
          >
            <img
              src={product.thumbnailImageUrl}
              alt={product.name}
              className="object-contain mb-2 w-full" // Adjust the size as needed
              style={{ height: 'auto', maxHeight: '50%' }} // Inline style to adjust image size
            />
            <div className="flex flex-col justify-between flex-1 w-full">
              <span className="text-center font-bold">{product.name}</span>
              <span className="text-center">Size: {product.size}</span>
              <span className="text-center font-semibold">{`$${product.price.toFixed(2)}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockProductCardPage;
