import React from 'react'
import Header from './components/layout/header';
import ContentList from './components/elements/contentList';
import './styles/app.styles.scss';
import Pagination from './components/elements/paginate';


const App = (props) => {
    return (
        <>
            <Header />
            <div className="main-container">
                <ContentList />     
                <Pagination />  
            </div>
            
        </>
    )
}

export default App