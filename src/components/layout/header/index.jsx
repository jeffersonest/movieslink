import React from 'react';
import './styles.scss';
import Search from '../../elements/search';

const Header = () => {
    return(
        <>
            <nav>
                <div className="logo-container" style={{'color':'white'}}>
                    <img src="/images/commons/popcorn.svg" alt="popcorn-logo"/>
                </div>

                <div className="search-container" style={{'color':'white'}}>
                    <Search />
                </div>
            </nav>
        </>
    )
};

export default Header;
