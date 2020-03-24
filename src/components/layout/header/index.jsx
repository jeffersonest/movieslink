import React, { useEffect, useState } from 'react';
import './styles.scss';
import Search from '../../elements/search';

const Header = () => {

    const [navColor, setNavColor] = useState('')

    useEffect(() => {

        function listenScrollEvent(e) {
            if (window.scrollY > 10) {
                setNavColor('scrolled')
            } else {
                setNavColor('')
            }
        }

        window.addEventListener('scroll', listenScrollEvent)

    }, []);

    return (
        <>
            <nav className={navColor}>
                <div className="logo-container" style={{ 'color': 'white' }} onClick={()=>(window.location.reload())}>
                    <img src="/images/commons/popcorn.svg" alt="popcorn-logo" />
                    <span className="overpass-font logo_name"><span className="anton-font">MOVIES</span>LINK</span>
                </div>

                <div className="search-container" style={{ 'color': 'white' }}>
                    <Search />
                </div>
            </nav>
        </>
    )
};

export default Header;
