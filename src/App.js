import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import ContentFeed from './components/ContentFeed'
import SearchBar from './components/SearchBar'

export default class App extends React.Component{

  render(){
    return (
      <div>
        <SearchBar />
        <BrowserRouter>
          <Route path="/items" component={ContentFeed}/>
          <Route path="/items/:id" component={ItemDetail} exact/>
        </BrowserRouter>
      </div>
    )
  }

}
