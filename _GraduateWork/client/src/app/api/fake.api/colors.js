const colors = [
  { _id: 'FFFFFF', name: 'white' },
  { _id: '000000', name: 'black' },
  { _id: '808080', name: 'gray' },
  { _id: 'C0C0C0', name: 'silver' },
  { _id: 'DAA520', name: 'gold' },
  { _id: '6C4807', name: 'bronze' },
  { _id: 'AC4D25', name: 'copper' },
  { _id: 'FF00FF', name: 'pink' },
  { _id: '582E7E', name: 'amethyst' },
  { _id: '40E0D0', name: 'turquoise' },
  { _id: 'FFFF00', name: 'yellow' },
  { _id: '00FF00', name: 'green' },
  { _id: '00008B', name: 'darkblue' },
  { _id: '0000FF', name: 'blue' },
  { _id: 'FF0000', name: 'red' },
  { _id: 'FF4500', name: 'orange' },
  { _id: 'A52A2A', name: 'brown' },
  { _id: 'E3D9C2', name: 'pearl' }
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
