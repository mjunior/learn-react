import React from 'react';
import queryString from 'query-string'
import ContentItem from './ContentItem'
import '../index.css'

export default class ContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    let searchValue = queryString.parse(this.props.location.search).search
    this.setState({searchValue: searchValue})
    this.getItems(searchValue);
  }

  getItems(searchValue){
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`)
      .then(results => results.json())
      .then(results => console.log(results))
  }

  render(){ 
    return (
      <h1>Lista: { this.state.searchValue }</h1>
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