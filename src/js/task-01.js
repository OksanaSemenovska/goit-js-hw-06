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

// 1. Нам потрібно зайти в клас item.Робимо за допомогою querySelectorAll;
// 2. Далі потрібно перебрати масив, де 1. буде категорія  (це h2),
//     2 - елемент(кількість по списку li); (перебираємо за методом forEach, він буде
//         перебирати всі елементи до кінця);
// 3. Створюємо функцію, де відразу виводимо в консоль:
// - (`Category: ${item.firstElementChild.textContent}`)
// де - заходимо в клас item, шукаємо firstElementChild - це перша дитина(в нас вона h2, як і потрібно)
// і нам потрібно тільки текстовий контент без тегів, додаємо textContent;
// - (`Elements: ${item.lastElementChild.children.length}`);
// тобто заходим в item, де нам треба остання дитина(в нас вона li), і нам по умові треба дізнатись
// тільки довжину цих лішок всіх.тому рахуємо всіх дітей children + length, так як нам треба саме кількість(довжина)


// і того за допомогою forEach воно пройдеться по всьому списку який нам треба. і в консоль виведе всі елементи;












