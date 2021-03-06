import React from 'react';
import { BrowserRouter, Route,Router , Switch } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import ContentFeed from './components/ContentFeed'
import SearchBar from './components/SearchBar'

export default class App extends React.Component{

  render(){
    return (
      <div>
      
        
        <BrowserRouter>
        <SearchBar />
          <Switch>
            <Route path="/items/:id" component={ItemDetail} exact/>
            <Route path="/items" component={ContentFeed}/>
          </Switch>
        </BrowserRouter>
  
      </div>
    )
  }

}
