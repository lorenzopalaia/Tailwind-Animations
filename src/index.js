/*
  Install:
    - add the plugin to the plugins array in tailwind.config.js
  Usage:
    - add the animate-<name> class to the element you want to animate
    - <name> is the name of the animation, see reference above
*/
const animationsFile = require("./animations");

const plugin = require("tailwindcss/plugin");

const tailwindAnimations = function ({ addUtilities }) {
  const tailwindAnimations = animationsFile;
  addUtilities(tailwindAnimations);
};

const tailwindAnimationsPlugin = plugin(tailwindAnimations);

module.exports = tailwindAnimationsPlugin;
