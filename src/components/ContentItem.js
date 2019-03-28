import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,CardBody,CardText,CardTitle,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const ContentItem = ({item}) =>(
  <Row className="ContentItem">
    <Col xs="3" />
    <Col xs="12" sm="6">
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/500/FF0000/FFF/?text=Down.com"></CardImg>
        <CardBody>
          <CardTitle>
          <Link to={`/item/${item.id}`}>{item.title}</Link>
          </CardTitle>
          <CardText>
            { item.body }
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

export default ContentItem