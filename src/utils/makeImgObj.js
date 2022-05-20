// The following is a utility to create an object of image names and paths from the assets directory.

// It's a bit ridiculous but you import the default export of this file into another module, console.log it, and copy-paste that object into a .json file.

// Ideally it would write the file itself I haven't gotten fs working correctly with webpack yet, and require.context is part of webpack.

// This entire workaround is due to jest tests breaking on require.context()

// From https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs
function importAll(r) {
  return r.keys().map(r);
}

const imageFiles = importAll(
  require.context('../assets/', false, /\.(png|jpe?g|svg)$/)
);

const imageContext = require.context(
  './../assets/',
  false,
  /\.(png|jpe?g|svg)$/
);

const imageNames = imageContext.keys().map((path) => {
  return path.match(/[a-z\-\d]+/i);
});

let allImages = {};

for (let [index, image] of imageNames.entries()) {
  allImages[image] = imageFiles[index];
}

const imageObject = JSON.stringify(allImages);

export default imageObject;

// fs.writeFile('../constants/images.json', imageFileContent, function (err) {
//   if (err) return console.log(err);
// });
