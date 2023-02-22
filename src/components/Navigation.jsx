import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link, Outlet} from 'react-router-dom';
function Navigation() {
  return (
      <div>
      <Navbar className="nav-light">
       <Container>
      

         <Link to="/" className='nav brand'>
          Calypso
          </Link>
          
        <Nav className="me-auto">

        
          <Link to="/about" className='nav' >
              A propos
          </Link>
          <Link to="/contact" className='nav'>
           Contact
           </Link>
          <Link to="/services" className='nav'>
            Mes Services
            </Link>
          
          </Nav>
          </Container>
          </Navbar>

            <Outlet />
        </div>
  );
}

export default Navigation;