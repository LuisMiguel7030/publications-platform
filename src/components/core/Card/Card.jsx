import './card.scss';
import CardActions from './CardActions';
import CardContent from './CardContent';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
    static Actions = CardActions;
    static Content = CardContent;

    getClassName = () => classNames('card', this.props.className);

    render() {
        return (
            <div className={this.getClassName()}>
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Card;