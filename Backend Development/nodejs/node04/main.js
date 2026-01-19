const cookDish = require('./chef');
const serveDish = require('./waiter');

const dish = cookDish('paranthe')
serveDish(dish);
console.log('customer is happy...');
