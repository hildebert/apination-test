import { createAction } from 'redux-act';

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const lockStripe = createAction('Lock stripe', (componentIndex, stripeIndex, color) => ({ componentIndex, stripeIndex, color }));