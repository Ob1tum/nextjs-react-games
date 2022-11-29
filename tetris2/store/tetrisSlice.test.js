import { expect, test, describe } from '@jest/globals';

import tetrisSlice, { changeDropTime } from './tetrisSlice';

describe('Проверка changeDropTime в tetrisSlice (@redux/toolkit)', () => {
  test('Тест - 1', () => {
    expect(tetrisSlice({ score: 400, dropTime: 1000 }, changeDropTime())).toEqual({
      score: 400,
      dropTime: 1000,
    });
  });
  test('Тест - 2', () => {
    expect(tetrisSlice({ score: 2000, dropTime: 1000 }, changeDropTime())).toEqual({
      score: 2000,
      dropTime: 700,
    });
  });
  test('Тест - 3', () => {
    expect(tetrisSlice({ score: 6000, dropTime: 200 }, changeDropTime())).toEqual({
      score: 6000,
      dropTime: 100,
    });
  });
  test('Тест - 4', () => {
    expect(tetrisSlice({ score: 6500, dropTime: 100 }, changeDropTime())).toEqual({
      score: 6500,
      dropTime: 100,
    });
  });
});
