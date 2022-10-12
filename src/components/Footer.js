import React, { Component, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Footer } from 'react-materialize';

export default function Footerr () {
    const { theme, toggle, dark } = useContext( ThemeContext );
    return (
        // <div className='footer' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        //     <span className='footer-item' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        //         copyright &copy; 2022
        //     </span>
        // </div>
        <Footer
            className="example"
            copyrights="copyright &copy; 2022"
        >
            <h5 className="white-text">
                Footer Content
            </h5>
            <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer content.
            </p>
        </Footer>
    );
}
