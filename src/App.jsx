import React from 'react'
import Header from './components/layout/header';
import ContentList from './components/elements/contentList';
import './styles/app.styles.scss';

const App = (props) => {
    return (
        <>
            <Header />
            <div className="main-container">
                <ContentList />
            </div>
            
        </>
    )
}

export default App