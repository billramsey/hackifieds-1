import { Row, Col, Jumbotron, Panel, Button } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListEntryView = (props) => {
  const { contactNum, title, User, Images, description, price, location, roomtype, distance, createdAt } = props.listing;
  const dollarPrice = price ? '$' + price : '';
  const handleClick = (e) => {
    e.preventDefault();
    props.show(location);
  }
  console.log(JSON.stringify(props.listing))
  let image;
  if(Images.length > 0) {
    image = <img height="200px" width="300px" src={Images[0].path}/>
  } else {
    image = <img height="200px" width="300px" src='http://impactbuilders.com/images/no-image.png'/>
  }

  let profileImg;
  if(User.profilePic) {
    profileImg = <img height="100px" width="100px" src={User.profilePic}/>
  } else {
    profileImg = <img height="100px" width="100px" src='https://avatars1.githubusercontent.com/u/11582021?v=3&s=400'/>
  }

  let contact;
  if(Object.keys(props.currentUser).length === 0) {
    contact = <div style={{color:'red'}}>Login to see the contact information</div>;
  } else {
    contact = <div>Email: {User.email}<br/>Phone: {contactNum}</div>;
  }

  return (
    <div>
      <Panel>
        <Row>
          <Col md={5}>
            {image}
          </Col>
          <Col md={5}>
            <Button bsSize="small" onClick={handleClick}>Show direction to Hack Reactor</Button>
            <br/>
            <h3>Title: {title}</h3>
            Where: {location}
            <br/>
            {contact}
            Price: ${price}
            <br/>
            Distance from Hack Reactor: {distance}
            <br/>
            Roomtype: {roomtype}
            <br/>
            Description: {description}
          </Col>
          <Col md={2}>
            {profileImg}
            <br/><br/>
            {User.firstName} {User.lastName}
            <br/>
            on {helper.dateFormatter(createdAt)}
          </Col>
        </Row>
        <Row>
        </Row>
      </Panel>
    </div>
  );
};

export default ListEntryView;