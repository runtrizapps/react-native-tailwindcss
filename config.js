let tailwind;
try {
  tailwind = require('../../tailwind');
} catch (e) {
  tailwind = require('tailwindcss/defaultConfig')();
}

module.exports = tailwind;