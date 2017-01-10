import Stripe from '../components/Stripe.js';
import styles from '../colors.sass';

import React from 'react';
import chai, { assert } from 'chai';
import { shallow } from 'enzyme';

import spies from 'chai-spies';

chai.use(spies);
const should = chai.should();

const onClickHandler = color => {};
const onClickHandlerSpy = chai.spy(onClickHandler);

const props = {
    background: [255, 255, 255],
    onClick: onClickHandlerSpy
};

describe('Stripe', () => {
    it ('renders DIV tag with correct className', () => {
        const component = shallow(<Stripe {...props}/>);
        assert.equal(component.find(`.${styles.stripe}`).length, 1);
    });

    it ('has correct color in styles', () => {
        const component = shallow(<Stripe {...props}/>);
        assert.equal(component.find('div').props('style').style.background, 'rgb(255, 255, 255)');
    });

    it ('handles click event', () => {
        const component = shallow(<Stripe {...props}/>);
        component.find('div').simulate('click');
        onClickHandlerSpy.should.have.been.called.with([255, 255, 255]);
    });
});