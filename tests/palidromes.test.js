const palidromes = require('../palidromes');

describe('palidromes()', () => {
  it('correctly identifies one-word palidromes', () => {
    expect(palidromes('madam')).toEqual(['madam']);
    expect(palidromes('racecar')).toEqual(['racecar']);
  });
});
