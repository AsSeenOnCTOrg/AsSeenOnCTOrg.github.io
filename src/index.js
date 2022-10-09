import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Container, Nav, Navbar } from 'react-bootstrap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/buy/:id",
    element: <p>Buy product</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: "",
    element: <p>Checkout</p>,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">As Seen On CT</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#items">Items</Nav.Link>
            <Nav.Link href="https://twitter.com/asseenonct" target="_blank">Twitter</Nav.Link>
            {/* <Nav.Link href="#products">Discord</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
    <RouterProvider router={router} />
      <div style={{background: '#282c34', color: 'white'}}>
      <div className='footerdiv'>
        <h6>About</h6>
        <div>
          <span>About Us</span> <br/>
          <span>Terms of Service</span> <br/>
          <span>Privacy Policy</span> <br/>
          <span>Cookie Policy</span>
        </div>
      </div>
      <div className='footerdiv'>
        <h6>Support</h6>
        <div>
          <span>Help and Support</span> <br/>
          <span>Feedback</span>
        </div>
      </div>
      <div className='footerdiv'>
        <h6>Resources</h6>
        <div>
          <span>Community</span>
        </div>
      </div>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
