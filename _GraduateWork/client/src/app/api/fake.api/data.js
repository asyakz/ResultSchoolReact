const jewelry = [
  {
    _id: 'b0be7a31-6de5-4a0b-aa79-8989e0c394b8',
    photo:
      '../../../public/imges/catalog/b0be7a31-6de5-4a0b-aa79-8989e0c394b8.jpg',
    name: 'Серьги',
    price: 1500,
    tags: ['earrings', 'epoxyResin'],
    bookmark: false
  },
  {
    _id: 'd4ecd03c-2298-455f-8e82-a88cc7fffbcc',
    photo:
      '../../../public/imges/catalog/d4ecd03c-2298-455f-8e82-a88cc7fffbcc.jpg',
    name: 'Серьги',
    price: 1500,
    tags: ['earrings', 'epoxyResin'],
    bookmark: false
  },
  {
    _id: '809638a6-a5ca-4478-9c43-c7c3a3aa1b89',
    photo:
      '../../../public/imges/catalog/809638a6-a5ca-4478-9c43-c7c3a3aa1b89.jpg',
    name: 'Кулон',
    price: 1200,
    tags: ['pendant', 'epoxyResin'],
    bookmark: false
  },
  {
    _id: '6f1f033a-397c-4a76-b07b-0687f72bbf44',
    photo:
      '../../../public/imges/catalog/6f1f033a-397c-4a76-b07b-0687f72bbf44.jpg',
    name: 'Кулон',
    price: 1100,
    tags: ['pendant', 'epoxyResin'],
    bookmark: false
  }
];

if (!localStorage.getItem('jewelry')) {
  localStorage.setItem('jewelry', JSON.stringify(jewelry));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('jewelry')));
    }, 2000);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const jewelry = JSON.parse(localStorage.getItem('jewelry'));
    const jewelryIndex = jewelry.findIndex((j) => j._id === id);
    jewelry[jewelryIndex] = { ...jewelry[jewelryIndex], ...data };
    localStorage.setItem('jewelry', JSON.stringify(jewelry));
    resolve(jewelry[jewelryIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('jewelry')).find(
          (jew) => jew._id === id
        )
      );
    }, 1000);
  });

export default {
  fetchAll,
  getById,
  update
};
