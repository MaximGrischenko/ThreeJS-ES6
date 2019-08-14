const element = selector => document.querySelector(selector);
const converter = (r, g, b) => {
  let red = Math.round(r * 255).toString(16);
  let green = Math.round(g * 255).toString(16);
  let blue = Math.round(b * 255).toString(16);

  if (red.length === 1) {
    red = '0' + red;
  }
  if (green.length === 1) {
    green = '0' + green;
  }
  if (blue.length === 1) {
    blue = '0' + blue;
  }

  return `#${red}${green}${blue}`;
};

export { element, converter };
