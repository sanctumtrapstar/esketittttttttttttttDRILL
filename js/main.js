let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu-nav");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  hamburger.classList.toggle("menu--active");
});


// изменение контейнера высота

// function hideImageOutsideSection() {
//     var section = document.querySelector('.main');
//     var image = document.querySelector('.main-content-img');

//     var sectionRect = section.getBoundingClientRect();
//     var imageRect = image.getBoundingClientRect();

//     // Проверяем, выходит ли изображение за пределы секции по высоте
//     var isImageOutside = imageRect.bottom > sectionRect.bottom;

//     // Скрываем или отображаем изображение
//     image.style.display = isImageOutside ? 'none' : 'flex';
//   }

//   // Вызываем функцию при изменении размеров окна с использованием requestAnimationFrame
//   function handleResize() {
//     requestAnimationFrame(hideImageOutsideSection);
//   }

//   // Вызываем функцию при загрузке страницы и изменении размеров окна
//   window.onload = window.onresize = handleResize;