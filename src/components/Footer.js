import React, { Component, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Footer () {
    const { theme, toggle, dark } = useContext( ThemeContext );
    return (
        <div className='footer' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <span className='footer-item' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                copyright &copy; 2022
            </span>
        </div>
    );
}
