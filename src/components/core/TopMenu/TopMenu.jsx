import './topMenu.scss'
import PropTypes from 'prop-types';
import React from 'react';

function TopMenu({ title }) {
    return (
        <header className="top-menu" >
            <h1 className="top-menu__title">{title}</h1>
        </header>
    )
}

TopMenu.propTypes = {
    title: PropTypes.string
};

TopMenu.defaultProps = {
    title: null
};

export default TopMenu;