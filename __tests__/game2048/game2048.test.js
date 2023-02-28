import { describe, expect, test } from '@jest/globals';
import Service from '../../game2048/service/service';

describe('game2048 service check', () => {
  const service = new Service();
  test('swipe numbers check 0-0-0-2', () => {
    expect(service.swipeNumbers([0, 0, 0, 2], 0, () => {})).toEqual([2, 0, 0, 0]);
  });
  test('swipe numbers check 0-4-4-2', () => {
    expect(service.swipeNumbers([0, 4, 4, 2], 0, () => {})).toEqual([8, 2, 0, 0]);
  });
  test('swipe numbers check 1024-1024-0-2', () => {
    expect(service.swipeNumbers([1024, 1024, 0, 2], 0, () => {})).toEqual([2048, 2, 0, 0]);
  });
  test('game is not over check', () => {
    expect(
      service.gameIsOver(
        [
          [2, 4, 2, 4],
          [4, 2, 4, 2],
          [2, 4, 0, 4],
          [16, 2, 16, 2],
        ],
        () => {},
      ),
    ).toBe(false);
  });
  test('game is not over check', () => {
    expect(
      service.gameIsOver(
        [
          [2, 2, 2, 4],
          [4, 2, 4, 2],
          [2, 4, 2, 4],
          [16, 2, 16, 2],
        ],
        () => {},
      ),
    ).toBe(false);
  });
  test('game is over check', () => {
    expect(
      service.gameIsOver(
        [
          [2, 4, 2, 4],
          [4, 2, 4, 2],
          [2, 4, 2048, 4],
          [16, 2, 16, 2],
        ],
        () => {},
      ),
    ).toBe(true);
  });
  test('reflect arr check', () => {
    expect(
      service.reflectArray([
        [2, 2, 2, 4],
        [4, 2, 2, 2],
        [2, 2, 2, 4],
        [4, 2, 2, 2],
      ]),
    ).toEqual([
      [4, 2, 2, 2],
      [2, 2, 2, 4],
      [4, 2, 2, 2],
      [2, 2, 2, 4],
    ]);
  });
  test('transpose arr check', () => {
    expect(
      service.transposeArray([
        [2, 2, 2, 4],
        [4, 2, 2, 2],
        [2, 2, 2, 4],
        [4, 2, 2, 2],
      ]),
    ).toEqual([
      [2, 4, 2, 4],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [4, 2, 4, 2],
    ]);
  });
  test('compare arrs check', () => {
    expect(
      service.compareArrays(
        [
          [2, 2, 2, 4],
          [4, 2, 2, 2],
          [2, 2, 2, 4],
          [4, 2, 2, 2],
        ],
        [
          [2, 2, 2, 4],
          [4, 2, 2, 2],
          [2, 2, 2, 4],
          [4, 2, 2, 2],
        ],
      ),
    ).toBe(true);
  });
});
