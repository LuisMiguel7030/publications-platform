import './cardContent.scss';
import PropTypes from 'prop-types';
import React from 'react';

function CardContent(props) {

    return (
        <div className="card-content">
            {props.children}
        </div>
    )
}

CardContent.propTypes = {
    children: PropTypes.node
};

export default CardContent;