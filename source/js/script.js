var color_list = document.getElementById('color_list');
//var image_catalog = document.getElementById('image_catalog');

if (color_list) {
  color_list.addEventListener('click', selectColor);
}

/***функция выобра цвета***/

function selectColor(event) {
  var target = event.target;

  while (target != this) {
    if (target.classList.contains('catalog-item__color-item')) {
      deselectAllColor(this);
      target.classList.add('catalog-item__color-item--active');
    //showImage(target.dataset.src);
      return;
    }
    target = target.parentNode;
  }
}

/***функция удаления всех выбранных цветов***/

function deselectAllColor(items) {
  for (var i = 0; i < items.children.length; i++) {
    items.children[i].classList.remove('catalog-item__color-item--active');
  }
}

/***ф-я переключения изображения**/

function showImage(href) {
  image_catalog.src = href;
}
