// const person = {
//     name: 'Ildar',
//     age: 34,
//     locaion: {
//         city: 'Calgary',
//         temp: -15
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.locaion;

// if (city && !!temperature) {
//     console.log(`It's a ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enamy',
//     author: 'Ryan Holuday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Unknown' } = book.publisher;

// console.log(publisherName)

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensilvania', '191434'];
// const [, city, state = 'New Your'] = address;

// console.log(`${city} `);

const item = ['Coffee', '$2.00', '$2.50', '$2.75' ];
const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`)