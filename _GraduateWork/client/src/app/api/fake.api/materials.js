const materials = [
  { _id: 'materia01', name: 'Эпоксидная смола' },
  { _id: 'materia02', name: 'Бисер' },
  { _id: 'materia03', name: 'Полимерная глина' },
  { _id: 'materia04', name: 'Натуральный камень' },
  { _id: 'materia05', name: 'Медная проволока' },
  { _id: 'materia06', name: 'Хлопковая нить/шнур' },
  { _id: 'materia07', name: 'Сухоцвет' }
];

if (!localStorage.getItem('materials')) {
  localStorage.setItem('materials', JSON.stringify(materials));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('materials')));
    }, 1000);
  });

export default {
  fetchAll
};
