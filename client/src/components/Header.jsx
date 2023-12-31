/* Use CSS for header, as it will be used on multiple pages */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupPage from './Signup';
import LoginPage from './Login';

import Auth from '../utils/auth';

import '../styles/header.css'

const style  =  {

  mainContainer: {
    background: 'black',

  },
  navLinkBtns: {
    background: 'red',
  }

};

// add onClick to  logout button
function Header () {

    const [showModal, setShowModal] = useState(false);

    return (
        // <div className="header-container">
        //     <a href="/home">Home</a>
        //     <a href="/blackjack">Blackjackpage</a>
        //     <a href="/login">login</a>
        //     <a href="/signup">signup</a>
        //     <button>Logout</button>
        // </ div>
        <>
      <Navbar className='header'>
        <Container fluid>
          <Navbar.Brand className='header-nav-item' style={{color:'white', fontSize:'24px'}} as={Link} to='/'>
            LANDING
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
            <Nav className='ml-auto d-flex'>
              
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className='header-nav-item' style={{color:'white', fontSize:'24px'}} onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link className='header-nav-item' style={{color:'white', fontSize:'24px'}} onClick={() => setShowModal(true)}>LOG IN / SIGN UP</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header 
          style={style.mainContainer}
          closeButton>
            <Modal.Title 
            id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item
                
                >
                  <Nav.Link 
                  style={style.navLinkBtns}
                  eventKey='login' className="login-link">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                  style={style.navLinkBtns}
                   eventKey='signup' className="signup-link">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
          style={style.mainContainer}
          >
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginPage handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignupPage handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
    );
}

export default Header;