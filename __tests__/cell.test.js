import { render } from '@testing-library/react';
import { expect, test, describe } from '@jest/globals';

import Cell from '../tetris2/components/cell/cell';

describe('Проверка компонента Cell', () => {
  render(<Cell />);
  test('Тест - 1 (render Cell)', () => {
    expect.anything();
  });
});
