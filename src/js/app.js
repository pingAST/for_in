// TODO: write your code here
import orderByProps from './orderByProps';
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const order = ['name', 'level'];

console.log(orderByProps(obj, order));
