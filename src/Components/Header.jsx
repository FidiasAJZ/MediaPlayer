import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  // your code here
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/svg/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Reproductor React App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
      );
    }

/* function BrandExample() {
  
}*/

//export default BrandExample; 