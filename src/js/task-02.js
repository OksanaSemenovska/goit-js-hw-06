const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// - Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// - Додасть назву інгредієнта як його текстовий вміст.
// - Додасть елементу клас item.
// - Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



 const list = document.querySelector("#ingredients");
 const newList= [];
 for (const obj of ingredients) {
   const item = document.createElement("li");
   item.textContent = obj;
   item.classList.add("item");

   newList.push(item);
 }
 list.append(...newList);

// На самому початку ми звертаємось (знаходимо) id ingredients
// 1. Створюємо новий, пустий масив
// 2. так як нам треба буде відобразити все зі списку ingredients використовуємо for...of(щоб пробігтись по всіх значеннях)
// 3.  де:
// - cтворюємо новий елемент(тег) - li (за допомогою createElement - створення нового ел-ту)
//   - нам потрібно буде відобразити текстовий контент, тому використовуємо textContent;
// - додаємо клас для лішок - item (за допомогою classList - це створення класів для ет-тів)
// з використанням add - так як саме він додає клас до списку ел-ту
// 4. далі в масив пушимо(додаємо) те що ми створили;
// 5/ в зміну list (це наш ul) ми додаємо після нього за допомогою append наш розпилений масив newList
// чому (...newList) - щоб кожен елемент був окремий з нового рядку
