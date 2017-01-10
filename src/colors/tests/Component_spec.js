import Component from '../components/Component.js';
import styles from '../colors.sass';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

const props = {
    count: 4,
    generator: () => ['white', 'black', 'green', 'red'],
    onStripeClick: () => {}
};

describe('Component', () => {
    it ('renders DIV tag with corrent className', () => {
        const component = shallow(<Component {...props}/>);
        assert.equal(component.find(`.${styles.component}`).length, 1);
    });

    it ('has corrent number of children', () => {
        const component = shallow(<Component {...props}/>);
        assert.equal(component.children().length, props.count);
    });

    it ('children should have correct colors', () => {
        const component = shallow(<Component {...props}/>);
        assert.equal(component.children().get(0).props.background, 'white');
        assert.equal(component.children().get(1).props.background, 'black');
        assert.equal(component.children().get(2).props.background, 'green');
        assert.equal(component.children().get(3).props.background, 'red');
    });
});