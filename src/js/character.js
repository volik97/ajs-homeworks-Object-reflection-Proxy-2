// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон',
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//       // <- обратите внимание, описание "засекречено"
//     },
//   ],
// };

function getSpecial({ special }) {
  const specialView = [];
  for (const item of special) {
    if (!Object.prototype.hasOwnProperty.call(item, 'description')) {
      item.description = 'Описание недоступно';
      specialView.push(item);
    } else {
      specialView.push(item);
    }
  }
  return specialView;
}

export default getSpecial;
