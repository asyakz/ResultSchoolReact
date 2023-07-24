const jewelry = [
  {
    _id: 'b0be7a31-6de5-4a0b-aa79-8989e0c394b8',
    photo:
      '../../../public/imges/catalog/b0be7a31-6de5-4a0b-aa79-8989e0c394b8.jpg',
    name: 'Бирюзовые серьги с гортензией и озатамнусом',
    jewelryType: 'type01',
    materials: ['materia01', 'materia07'],
    price: 1500,
    techniques: [],
    colors: ['40E0D0', 'FFFF00'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi sunt deserunt impedit tempora saepe ab, minus praesentium adipisci magnam qui neque consequuntur repellendus illo accusamus, vitae molestiae corrupti nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam natus voluptatibus molestiae blanditiis iure ab officia. Vero voluptatem ratione facilis, alias nobis itaque obcaecati. Consectetur eius enim nesciunt cupiditate.',
    bookmark: false
  },
  {
    _id: 'd4ecd03c-2298-455f-8e82-a88cc7fffbcc',
    photo:
      '../../../public/imges/catalog/d4ecd03c-2298-455f-8e82-a88cc7fffbcc.jpg',
    name: 'Синие серьги с гортензией и озатамнусом',
    jewelryType: 'type01',
    materials: ['materia01', 'materia07'],
    price: 1500,
    techniques: [],
    colors: ['00008B', 'FF00FF'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi sunt deserunt impedit tempora saepe ab, minus praesentium adipisci magnam qui neque consequuntur repellendus illo accusamus, vitae molestiae corrupti nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam natus voluptatibus molestiae blanditiis iure ab officia. Vero voluptatem ratione facilis, alias nobis itaque obcaecati. Consectetur eius enim nesciunt cupiditate.',
    bookmark: false
  },
  {
    _id: '809638a6-a5ca-4478-9c43-c7c3a3aa1b89',
    photo:
      '../../../public/imges/catalog/809638a6-a5ca-4478-9c43-c7c3a3aa1b89.jpg',
    name: 'Кулон с желтым гелихризумом',
    jewelryType: 'type04',
    materials: ['materia01', 'materia07'],
    price: 1200,
    techniques: [],
    colors: ['FFFF00'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi sunt deserunt impedit tempora saepe ab, minus praesentium adipisci magnam qui neque consequuntur repellendus illo accusamus, vitae molestiae corrupti nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam natus voluptatibus molestiae blanditiis iure ab officia. Vero voluptatem ratione facilis, alias nobis itaque obcaecati. Consectetur eius enim nesciunt cupiditate.',
    bookmark: false
  },
  {
    _id: '6f1f033a-397c-4a76-b07b-0687f72bbf44',
    photo:
      '../../../public/imges/catalog/6f1f033a-397c-4a76-b07b-0687f72bbf44.jpg',
    name: 'Кулон с одуванчиком',
    jewelryType: 'type04',
    materials: ['materia01', 'materia07'],
    price: 1100,
    techniques: [],
    colors: ['FFFFFF'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi sunt deserunt impedit tempora saepe ab, minus praesentium adipisci magnam qui neque consequuntur repellendus illo accusamus, vitae molestiae corrupti nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam natus voluptatibus molestiae blanditiis iure ab officia. Vero voluptatem ratione facilis, alias nobis itaque obcaecati. Consectetur eius enim nesciunt cupiditate.',
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
    }, 1000);
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
