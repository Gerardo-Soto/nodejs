// sharp
const sharp = require('sharp');

sharp('hollowknight.JPG')
    .resize(100)
    .grayscale()
    .toFile('resized.JPG');



/*
    $9,259
    $13,000
*/