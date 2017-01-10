import * as actions from '../actions.js';
import { assert } from 'chai';
import { main, secondary } from '../utils/colorsGenerators.js';

describe('Colors generators', () => {
    it('Main generator should generate alternating colors', () => {
        assert.deepEqual(main(4), ['white', 'silver', [255, 99, 71], 'silver']);
    });

    it('Secondary generator should generate one red stripe', () => {
        const colors = secondary({})(10);
        const reds = colors.filter(color => color[0] === 255);
        assert.equal(reds.length, 1);
    });

    it('All stripes but one should not have red color', () => {
        const colors = secondary({})(10);
        const reds = colors.filter(color => color[0] === 0);
        assert.equal(reds.length, 9);
    });

    it('Secondary generator should lock a color', () => {
        const colors = secondary({ 0: 'green', 5: 'blue' })(10);
        assert.equal(colors[0], 'green');
        assert.equal(colors[5], 'blue');
    });

    it('Secondary generator should not add random red if red is locked', () => {
        const colors = secondary({ 5: [255, 255, 255] })(10);
        assert.deepEqual(colors[5], [255, 255, 255]);

        const reds = colors.filter(color => color[0] === 255);
        assert.equal(reds.length, 1);
    });
});

