const jewelryType = [
  { _id: 'type01', name: 'Серьги' },
  { _id: 'type02', name: 'Колье' },
  { _id: 'type03', name: 'Кольцо' },
  { _id: 'type04', name: 'Кулон' },
  { _id: 'type05', name: 'Панно' },
  { _id: 'type06', name: 'Браслет' },
  { _id: 'type07', name: 'Бусы' }
];

if (!localStorage.getItem('jewelryType')) {
  localStorage.setItem('jewelryType', JSON.stringify(jewelryType));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('jewelryType')));
    }, 1000);
  });

export default {
  fetchAll
};
