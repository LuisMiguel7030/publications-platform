import './button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Button({ color, children, className, onClick }) {

    const getButtonProps = () => ({
        className: getButtonClassName(),
        onClick: onClick
    });

    const getButtonClassName = () => {
        return classNames(
            `btn ${getButtonColor()}`,
            className
        );
    };

    const getButtonColor = () => `btn--${color}`;

    return (
        <button {...getButtonProps()}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'green']),
    children: PropTypes.node,
};

Button.defaultProps = {
    color: 'default'
};

export default Button

