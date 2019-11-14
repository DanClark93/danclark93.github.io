import { processAttributes } from '../helpers';

describe('helpers', () => {
  describe('#processAttributes()', () => {
    it('should take all attributes and convert them into an object of the correct structure', () => {
      expect(
        processAttributes([
          {
            name: 'some-name',
            value: 'some-value',
          },
        ])
      ).toEqual({
        someName: 'some-value',
      });
    });
  });
});
