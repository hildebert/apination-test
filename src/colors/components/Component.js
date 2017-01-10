import React from 'react';
import Stripe from './Stripe.js';

import styles from '../colors.sass';

export default class Component extends React.Component {
    static propTypes = {
        count: React.PropTypes.number.isRequired,
        generator: React.PropTypes.func.isRequired,
        onStripeClick: React.PropTypes.func
    };

    static defaultProps = {
        onStripeClick: () => () => undefined
    };

    shouldComponentUpdate(newProps) {
        return this.props.count !== newProps.count;
    }

    /**
     * @return {number}
     */
    calcCount() {
        let count = this.props.count;

        /**
         * If width of a container in pixels is less that number
         */
        if (this.refs.component) {
            count = Math.min(count, this.refs.component.offsetWidth - 1);
        }

        return count;
    }

    render() {
        const colors = this.props.generator(this.calcCount());
        const stripes = colors.map((color, index) => <Stripe key={index} background={color} onClick={this.props.onStripeClick(index)} />);

        return (
            <div className={styles.component} ref='component'>
                {stripes}
            </div>
        );
    }
}