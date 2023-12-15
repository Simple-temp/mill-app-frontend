import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Link to="/" className='text-decoration-none text-dark'>
                <h2 className='mt-5 text-center text-uppercase'>Mill Info</h2>
            </Link>
        </>
    );
};

export default Header;
