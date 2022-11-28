import { expect, test, describe } from '@jest/globals';

import { randomDetail } from './details';

describe('Рандомная деталь', () => {
  test('Тест детали - 1 (определенность)', () => {
    expect(randomDetail()).not.toBeUndefined();
    expect(randomDetail()).not.toBeNull();
    expect(randomDetail()).not.toBeFalsy();
  });
  test('Тест детали - 2', () => {
    const notExpectedObj = {
      shape: [
        [
          [0, 0],
          [0, 0],
        ],
      ],
      color: '80, 80, 80',
    };
    expect(randomDetail()).toStrictEqual(expect.not.objectContaining(notExpectedObj));
  });
});
