import React from 'react';
import ContentItem from './ContentItem'
import '../index.css'

export default class ContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems(){
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=reverse')
      .then(results => results.json())
      .then(results => console.log(results))
  }

  render(){ 
    return (
      <h1>Lista</h1>
      // <ul>
      //   cas
      //   {/* {this.state.items.map(function(item,index){
      //     return (
      //       <ContentItem item={item} key={index} />
      //     )
      //   })} */}
      // </ul>
    )
  }
}