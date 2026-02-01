const sharp = require('sharp');
const fs = require('fs');

// Read the SVG file
const svgBuffer = fs.readFileSync('clawar.svg');

// Convert SVG to PNG
sharp(svgBuffer)
  .resize(500, 500, { fit: 'cover' })
  .png()
  .toFile('clawar.png')
  .then(() => {
    console.log('✅ Converted clawar.svg to clawar.png');
  })
  .catch(err => {
    console.error('Error:', err);
  });
