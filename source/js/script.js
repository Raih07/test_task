var color_list = document.getElementById('color_list');

color_list.addEventListener('click', selectColor);

function selectColor(event) {
  var color_item = event.target.closest('.catalog-item__color-item');
  if (color_item && color_list.contains(color_item)) {
    deselectAllColor(this);
    color_item.classList.add('catalog-item__color-item--active');
  }
}

function deselectAllColor(items) {
  for (var i = 0; i < items.children.length; i++) {
    items.children[i].classList.remove('catalog-item__color-item--active');
  }
}
