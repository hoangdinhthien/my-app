import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Navigation () {
    const { theme, toggle, dark } = useContext( ThemeContext );
    return (
        <div className='nav' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className='nav-container'>
                <div className='nav-menu'>
                    <ul className='menu-list'>
                        <li className='menu-list-item'>
                            <a style={{ color: theme.color }} className='menu-list-item-link active' href='/'>Home</a>
                        </li>
                        <li className='menu-list-item'>
                            <a style={{ color: theme.color }} className='menu-list-item-link' href='#news'>News</a>
                        </li>
                        <li className='menu-list-item'>
                            <a style={{ color: theme.color }} className='menu-list-item-link' href='#about'>About</a>
                        </li>
                        <li className='menu-list-item'>
                            <a style={{ color: theme.color }} className='menu-list-item-link' href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <a className='switch-mode'
                    href='#'
                    onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid='toggle-theme-btn'
                >
                    Switch to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>
        </div>
    );
}
