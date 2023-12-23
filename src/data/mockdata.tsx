type Garment = {
  id: string;
  name: string;
  description: string;
  price: number;
  modelUrl: string;
  thumbnailImageUrl?: string;
  size: string; 
}

const MOCK_GARMENTS: Garment[] = [
  {
    id: '1',
    name: 'Shirt',
    description: 'A trendy shirt for all occasions.',
    price: 59.99,
    modelUrl: '/inventory/shirt.gltf',
    thumbnailImageUrl: '/images/p7.png',
    size: 'M', 
  },
  {
    id: '2',
    name: 'Pants',
    description: 'Stylish pants for formal wear.',
    price: 19.99,
    modelUrl: '/models/pants.gltf',
    thumbnailImageUrl: '/images/p7.png',
    size: '32', 
  },
  {
    id: '3',
    name: 'Sweater',
    description: 'A cozy sweater for cold days.',
    price: 29.99,
    modelUrl: '/models/sweater.gltf',
    thumbnailImageUrl: '/images/p7.png',
    size: 'L', 
  },
  {
    id: '4',
    name: 'Shirt2',
    description: 'A comfortable and versatile shirt.',
    price: 79.99,
    modelUrl: '/models/shirt2.gltf',
    thumbnailImageUrl: '/images/p7.png',
    size: 'S',
  },
  {
    id: '5',
    name: 'Pants2',
    description: 'Relaxed pants for everyday comfort.',
    price: 79.99,
    modelUrl: '/models/pants2.gltf',
    thumbnailImageUrl: '/images/p7.png',
    size: '34',
  },
  {
    id: '6',
    name: 'Jacket',
    description: 'A stylish jacket to complete your look.',
    price: 79.99,
    modelUrl: '/models/jacket.gltf',
    thumbnailImageUrl: '/images/p7.png',
    size: 'M',
  },
];

export { MOCK_GARMENTS };
