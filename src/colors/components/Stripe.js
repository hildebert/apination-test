import React from 'react';

import styles from '../colors.sass';

export default class Stripe extends React.Component {
    static propTypes = {
        background: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.string
        ]).isRequired,
        onClick: React.PropTypes.func
    };

    handleClick() {
        this.props.onClick(this.props.background);
    }

    render() {
        let { background } = this.props;

        if (Array.isArray(background)) {
            background = `rgb(${background[0]}, ${background[1]}, ${background[2]})`;
        }

        return (
            <div className={styles.stripe} style={{ background }} onClick={this.handleClick.bind(this)} />
        );
    }
}