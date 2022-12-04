//1 Порахує і виведе в консоль кількість категорій
//  в ul#categories, тобто елементів li.item.

const workItem = document.querySelectorAll('.item');
const categoriesLength = workItem.length;
let message = `Number of categories: ${categoriesLength}`;
console.log(message);

//2
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



   const categoriesItem = document.querySelectorAll(".item");
   categoriesItem.forEach((item) => {
       console.log(`Category: ${item.firstElementChild.textContent}`);
       console.log(`Elements: ${item.lastElementChild.children.length}`);
   });











