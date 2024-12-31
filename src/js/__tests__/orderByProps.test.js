import orderByProps from '../orderByProps';

test('should return sorted properties according to specific order', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ];

  expect(orderByProps(obj, order)).toEqual(expected);
});

test('should return properties sorted alphabetically when no order defined', () => {
  const obj = { name: 'мечник', health: 10, level: 2 };
  const order = [];
  const expected = [
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }
  ];

  expect(orderByProps(obj, order)).toEqual(expected);
});

test('should handle empty object', () => {
  const obj = {};
  const order = ['name', 'level'];
  const expected = [];

  expect(orderByProps(obj, order)).toEqual(expected);
});

test('should handle properties with undefined values', () => {
  const obj = { name: 'мечник', health: undefined, level: null };
  const order = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: null },
    { key: 'health', value: undefined }
  ];

  expect(orderByProps(obj, order)).toEqual(expected);
});
