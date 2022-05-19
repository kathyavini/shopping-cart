// From https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs
function importAll(r) {
  return r.keys().map(r);
}

const imageFiles = importAll(
  require.context('../assets/', false, /\.(png|jpe?g|svg)$/)
);

// These need to be in file system order
// Right now the jpg is coming after the pngs not sure why
const imageNames = [
  'black-alt',
  'black',
  'black2',
  'green',
  'green2',
  'matcha',
  'matcha2',
  'puer',
  'puer2',
];

let allImages = {};

for (let [index, image] of imageNames.entries()) {
  allImages[image] = imageFiles[index];
}

export default allImages;
