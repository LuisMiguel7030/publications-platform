import './card.scss';
import CardActions from './CardActions';
import CardContent from './CardContent';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
    static Actions = CardActions;
    static Content = CardContent;

    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {
    children: PropTypes.node
};

export default Card;