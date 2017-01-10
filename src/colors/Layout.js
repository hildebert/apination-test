import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import Component from './components/Component.js';
import { main as mainGenerator, secondary as secondaryGenerator } from './utils/colorsGenerators.js';
import styles from './colors.sass';

export class Layout extends React.Component {
    static propTypes = {
        count: React.PropTypes.number.isRequired,
        increment: React.PropTypes.func.isRequired,
        decrement: React.PropTypes.func.isRequired,
        lockStripe: React.PropTypes.func.isRequired,
        lockedColors: React.PropTypes.object.isRequired,
        secondaryCount: React.PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.onStripeClick = componentIndex => stripeIndex => color => this.props.lockStripe(componentIndex, stripeIndex, color);
    }

    render() {
        const { increment, decrement, count, lockedColors, secondaryCount } = this.props;

        const secondary = [];

        for (let i = 0; i < secondaryCount; i++) {
            secondary.push(<Component key={i} count={count} generator={secondaryGenerator(lockedColors[i])} onStripeClick={this.onStripeClick(i)} />);
        }

        return (
            <div className={styles.container + ' ' + styles.components}>
                <div className={styles.main}>
                    {<Component count={count} className={styles} generator={mainGenerator} />}
                    <div className={styles.controls}>
                        <button className={styles.control} onClick={increment}>+</button>
                        <button className={styles.control} onClick={decrement}>-</button>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <div className={styles.info}>Total lines: {count}</div>
                    <div className={styles.components}>
                        {secondary}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.colors.count,
    lockedColors: state.colors.lockedColors,
    secondaryCount: state.colors.secondaryCount
});

export default connect(mapStateToProps, { ...actions })(Layout);
