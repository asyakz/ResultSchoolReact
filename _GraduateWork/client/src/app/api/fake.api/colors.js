const colors = [
  { _id: 'FFFFFF', name: 'Белый' },
  { _id: '000000', name: 'Черный' },
  { _id: '808080', name: 'Серый' },
  { _id: 'C0C0C0', name: 'Серебряный' },
  { _id: 'DAA520', name: 'Золотой' },
  { _id: '6C4807', name: 'Бронзовый' },
  { _id: 'AC4D25', name: 'Медный' },
  { _id: 'FF00FF', name: 'Розовый' },
  { _id: '582E7E', name: 'Аметистовый' },
  { _id: '40E0D0', name: 'Бирюзовый' },
  { _id: 'FFFF00', name: 'Желтый' },
  { _id: '00FF00', name: 'Зеленый' },
  { _id: '00008B', name: 'Синий' },
  { _id: '0000FF', name: 'Голубой' },
  { _id: 'FF0000', name: 'Красный' },
  { _id: 'FF4500', name: 'Оранжевый' },
  { _id: 'A52A2A', name: 'Коричневый' },
  { _id: 'E3D9C2', name: 'Жемчужный/бежевый' }
];

if (!localStorage.getItem('colors')) {
  localStorage.setItem('colors', JSON.stringify(colors));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('colors')));
    }, 1000);
  });

export default {
  fetchAll
};
