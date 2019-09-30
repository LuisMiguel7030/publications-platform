import './cardContent.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function CardContent({ children, className }) {

    const getClassName = () => classNames('card-content', className);

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