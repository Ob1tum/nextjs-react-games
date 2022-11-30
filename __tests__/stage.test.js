import { expect, test, describe } from '@jest/globals';

import { createStage } from '../tetris2/components/stage/stage';

describe('Проверка ф-ции создания игрового поля', () => {
  test('Тест - 1', () => {
    const expected = Array.from(Array(20), () => new Array(10).fill([0, 'clear']));
    expect(createStage()).toStrictEqual(expect.arrayContaining(expected));
  });
  test('Тест - 2', () => {
    const expected = Array.from(Array(20), () => new Array(10).fill([1, 'merged']));
    expect(createStage()).toStrictEqual(expect.not.arrayContaining(expected));
  });
});
