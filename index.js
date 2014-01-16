
module.exports = function(pillbox, colors) {
  colors = colors || {};

  pillbox.on('add', function(tag, el) {
    var color = colors[tag];
    if (color)
      el.style.color = color;
  });
};
