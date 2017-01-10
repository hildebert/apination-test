import { createReducer } from 'redux-act';
import * as actions from './actions.js';

export const initialState = {
    secondaryCount: 4,
    count: 8,
    lockedColors: {}
};

export default createReducer({
    [actions.increment]: state => {
        return Object.assign({}, state, { count: state.count + 1 });
    },
    [actions.decrement]: state => {
        return Object.assign({}, state, { count: Math.max(1, state.count - 1) });
    },
    [actions.lockStripe]: (state, action) => {
        const { componentIndex, stripeIndex, color } = action;
        const lockedColors = JSON.parse(JSON.stringify(state.lockedColors));

        if (!lockedColors[componentIndex]) lockedColors[componentIndex] = {};
        lockedColors[componentIndex][stripeIndex] = color;

        return Object.assign({}, state, { lockedColors });
    }
}, initialState);