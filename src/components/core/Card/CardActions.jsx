import './cardActions.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function CardContent({ className, children }) {

    const getClassName = () => classNames('card-actions', className);

    return (
        <div className={getClassName()}>
            {children}
        </div>
    )
}

CardContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default CardContent;