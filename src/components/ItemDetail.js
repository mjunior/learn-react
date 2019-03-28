import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';

export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {}
    }
  }
  
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(result => result.json())
      .then(result => this.setState({item: result}))
  }

  render(){ 
    return (
      <div>
        <h1>{this.state.item.title}</h1>
        <h5>{this.state.item.body}</h5>
      </div>
    )
  }
}