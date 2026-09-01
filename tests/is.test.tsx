import { isNonNullable, isReactRenderable } from '../src';

describe('is', () => {
  describe('isNonNullable', () => {
    it.each([undefined, null])('returns false for nullable value %p', value => {
      expect(isNonNullable(value)).toBeFalsy();
    });

    it.each([false, '', 0, 'text', <span key="node" />])(
      'returns true for non-nullable value %p',
      value => {
        expect(isNonNullable(value)).toBeTruthy();
      },
    );
  });

  describe('isReactRenderable', () => {
    it.each([undefined, null, false, ''])(
      'returns false for non-renderable value %p',
      value => {
        expect(isReactRenderable(value)).toBeFalsy();
      },
    );

    it.each([0, true, 'text', <span key="node" />])(
      'returns true for renderable value %p',
      value => {
        expect(isReactRenderable(value)).toBeTruthy();
      },
    );
  });
});
