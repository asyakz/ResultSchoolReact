const techniques = [
  { _id: 'dhe63r3fdfjg4tech01', name: 'Ловец снов' },
  { _id: '8575323fdddsotech02', name: 'WireWrap' },
  { _id: '77931gfte5658tech03', name: 'Кольчужное плетение' },
  { _id: '77931gfte5658tech04', name: 'Макраме' },
  { _id: '77931gfte5658tech05', name: 'Вязаный жгут' },
  { _id: '77931gfte5658tech06', name: 'Оплетение кабошона' },
  { _id: '77931gfte5658tech07', name: 'Вышивка по коже' },
  { _id: '77931gfte5658tech07', name: 'Ндебеле' }
];

if (!localStorage.getItem('techniques')) {
  localStorage.setItem('techniques', JSON.stringify(techniques));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('techniques')));
    }, 1000);
  });

export default {
  fetchAll
};
