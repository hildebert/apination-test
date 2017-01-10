import * as actions from '../actions.js';
import { assert } from 'chai';

describe('Colors actions', () => {
    it('Increment action should have correct type', () => {
        assert(actions.increment.getType().indexOf('Increment') > -1);
    });

    it('Decrement action should have correct type', () => {
        assert(actions.decrement.getType().indexOf('Decrement') > -1);
    });

    it('Lock color action should have correct type', () => {
        assert(actions.lockStripe.getType().indexOf('Lock stripe') > -1);
    });

    it('Lock color action should have correct attributes', () => {
        assert.deepEqual(actions.lockStripe(1, 1, 'gray').payload, { componentIndex: 1, stripeIndex: 1, color: 'gray' });
    });
});

