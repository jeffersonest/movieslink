# movieslink-web

Movieslink is an application made with React that uses the [version 3 of The Movie Database (TMDb) API](https://developers.themoviedb.org/3/getting) to list and search everything about movies, series and genres ...

### 1.External Libs:

  - [React] (https://github.com/facebook/react)
  - [React scripts] (https://github.com/facebook/create-react-app/tree/master/packages/react-scripts)
  - [Redux] (https://github.com/reduxjs/redux)
  - [React Redux] (https://github.com/reduxjs/react-redux)
  - [Axios] (https://github.com/axios/axios)
  - [Nodesass] (https://github.com/sass/node-sass)
  
### 2. Architecture:

  - Flux:

    <h1 align="center">
      <img alt="Fastfeet" title="Fastfeet" src="https://cdn.scotch.io/scotchy-uploads/2014/10/rHwGUog.png" width="300px" />
    </h1> 
    
### 2. App Components:

  - Layout:
    - Header : Have a Logo container and Search component.

  - Elements:
    - contentList: list of contents (movies...).
    - contentModal: modal with content details.
    - paginate: used to manage the pages.
    - search: used to input the text thats will be searched
    
 - Actions:
    - Modal
    - Content
    
 - States:
    - modal
    - content
    
### 3. External Connection:

  1 - To connect the App to the api you need to set the Backend endpoint in:
    
        src/services/api.js
        
  2 - Change the baseURL. 
    
### 4. Starting the App (Needs the backend running to list the contents. [API](https://github.com/jeffersonest/movieslink-api)):

  1- To start the app locally, use:
    
        yarn start
        
### 5. Deploy (Needs the backend running to list the contents. [API](https://github.com/jeffersonest/movieslink-api)):

  1- To deploy the App, use:
    
        yarn build 
        
  2- Then get the dist folder generated and put in your webserver      
  

By Jefferson Estevam with ♥
