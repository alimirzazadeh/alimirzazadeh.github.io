// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 140,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff" });


var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function (color) {
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  // values.innerHTML = [
  // "hex: " + color.hexString,
  // "rgb: " + color.rgbString,
  // "hsl: " + color.hslString].
  // join("<br>");
  var parts = color.rgbString.split(',');
  parts[0] = parts[0].substring(4)
  parts[1] = parts[1].substring(1)
  parts[2] = parts[2].substring(1, parts[2].length - 1)
  console.log(parts);
  console.log((parseInt(parts[0]) + parseInt(parts[1]) + parseInt(parts[2]))/(256 * 3));
  document.getElementById("window").style.backgroundColor = color.rgbString;
  document.getElementById("tree").style.opacity = Math.max(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]))/(256);
});