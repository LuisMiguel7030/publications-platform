import './cardActions.scss';
import PropTypes from 'prop-types';
import React from 'react';

function CardContent({ className, children }) {

    return (
        <div className={`card-actions ${className}`}>
            {children}
        </div>
    )
}

CardContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default CardContent;