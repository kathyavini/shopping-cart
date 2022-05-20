import images from './images.json';

// Run this first to generate an object you can copy-paste into the above .json file. Yes, it's a little ridiculous, sorry
// import imageObject from '../utils/makeImgObj';
// console.log(imageObject);

export const items = [
  {
    name: 'Green Tea',
    image: images.green,
    imageAlt: images.green2,
    description: 'Light and subtle',
    price: '12.50',
    id: 1,
  },
  {
    name: 'Black Tea',
    image: images.black,
    imageAlt: images.black2,
    description: 'Smooth and Bright',
    price: '12.50',
    id: 2,
  },
  {
    name: 'Matcha',
    image: images.matcha,
    imageAlt: images.matcha2,
    description: 'Vibrant and Bold',
    price: '14.00',
    id: 3,
  },
  {
    name: 'Pu-erh Tea',
    image: images.puer,
    imageAlt: images.puer2,
    description: 'Rich and Fragrant',
    price: '16.50',
    id: 4,
  },
];
