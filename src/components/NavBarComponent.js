
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

const NavBarComponent = () => {
  const cartProducts = useSelector(state => state.cart);
  return (
   
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
          <Nav>
           <Link to="/" className="nav-link">
            Products
           </Link>
            </Nav>
          <Navbar.Toggle />
       <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
        <Link to="/cart" className="nav-link">
          My Bag {cartProducts.length}
          </Link>
        </Navbar.Text>
       </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
