import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';


import logoImg from '../assets/logo.svg'


function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar py-2">
    <Container className='navContainer' fluid>
      <Navbar.Brand as={Link} to='/' className='brandLink'>
        <img alt="OzTrip logo" src={logoImg} className="logoImg"/>
        <div className='brandText'>
          <span>Oz</span><span className='brandTextLarge'>Trip</span></div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby='offcanvasNavbarLabel-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className={"justify-content-end flex-grow-1 pe-3"}>
                  <Nav.Link  as={Link} to='/' className='navLink'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/destinations' className='navLink'>Destinations</Nav.Link>
                  <Nav.Link  as={Link} to='/mytrips' className='navLink'>My Trips</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default Header

{/* <Navbar collapseOnSelect expand="md" className="navbar py-2">
    <Container className='navContainer'>
      <Navbar.Brand as={Link} to='/' className='brandLink'>
        <img alt="OzTrip logo" src={logoImg} className="logoImg"/>
        <div className='brandText'>
          <span>Oz</span><span className='brandTextLarge'>Trip</span></div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to="/destinations">
            Destinations
          </Nav.Link>
          <Nav.Link as={Link} to="/mytrips">
            My Trips
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> */}