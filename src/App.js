// import logo from './logo.svg';
import logo from './asseenonct.png'
import comingsoon from './comingsoon.png'
import './App.css';

// or less ideally
import { Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const products = [1,2,3]

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <h1>As Seen On CT</h1> */}
        <img height={'250'} src={logo} />
        {/* <p>#WAGS</p> */}
        <br/>
        <Button as="a" variant="primary" href='#items'>
          Click to View our Items
        </Button>
        </header>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        {/* <br/> */}
        {/* <p>This is a paragraph</p> */}
        <div id="items">
        <br />
        {/* <h3>Our Products</h3> */}
        {
          products.map((item, key) => 
          <div style={{display: "inline-block"}}>
          <Card style={{ width: '18rem', margin: 20 }}>
            <Card.Img variant="top" src={comingsoon} />
            <Card.Body>
              <Card.Title>Coming Soon</Card.Title>
              <Card.Text>
                Coming Soon
              </Card.Text>
              {/* <Link to={'/buy/'+item}> */}
              {/* <a href='https://www.hel.io/pay/7eac18e3-7506-4e33-b6a7-5d27c3bfa00b'> */}
                <Button variant="primary" disabled>Buy</Button>
              {/* </a> */}
            </Card.Body>
          </Card>
          </div>
          )
        }
        <br />
        <br/>
        {/* <h3>Other Products</h3> */}
        {/* {
          products.map((item, key) => 
          <div style={{display: "inline-block"}}>
          <Card style={{ width: '18rem', margin: 20 }}>
            <Card.Img variant="top" src="https://alssports.vtexassets.com/arquivos/ids/1052750-1200-auto?v=637865940098600000&width=1200&height=auto&aspect=true" />
            <Card.Body>
              <Card.Title>As Seen On CT</Card.Title>
              <Card.Text>
                Snuggie
              </Card.Text>
              <Link to={'/buy/'+item}>
                <Button variant="primary">Buy</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          )
        } */}
        </div>
      
    </div>
  );
}

export default App;
