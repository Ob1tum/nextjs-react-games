import { render, screen } from '@testing-library/react';
import { expect, test, describe } from '@jest/globals';

import TetrisPlay from './TetrisPlay';

describe('Проверка компонента TetrisPlay', () => {
  test('Тест - 1', () => {
    render(<TetrisPlay />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
