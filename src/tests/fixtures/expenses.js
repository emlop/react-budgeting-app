import moment from 'moment';

export default [{
  id: '1',
  description: 'Toy',
  note: '',
  amount: 250,
  createdAt: 0
}, {
  id: '2',
  description: 'Furniture',
  note: '',
  amount: 250000,
  createdAt: moment(0).subtract(7, 'days').valueOf()
}, {
  id: '3',
  description: 'Phone',
  note: '',
  amount: 7500,
  createdAt: moment(0).add(7, 'days').valueOf()
}];