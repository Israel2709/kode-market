import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row
} from 'reactstrap'

import './App.scss';
import CreateProduct from './Pages/CreateProduct';
import EditProduct from './Pages/EditProduct';
import ProductCatalog from './Pages/ProductCatalog';
import ProductDetail from './Pages/ProductDetail'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const links = [
    {
      label: "Catálogo",
      path: ""
    },
    {
      label: "Crear producto",
      path: "create-product"
    },
    {
      label: "Carrito de compras",
      path: "shopping-cart"
    }
  ]
  return (
    <Router>
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {
                links.map((link, index) => (
                  <NavItem key={index}>
                    <Link to={`/${link.path}`} className="nav-link">{link.label}</Link>
                  </NavItem>
                ))
              }
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Row>
            <Switch>
              <Route path="/shopping-cart">
                <h1>Carrito</h1>
              </Route>
              <Route path="/create-product">
                <CreateProduct />
              </Route>
              <Route path="/product-detail/:id">
                <ProductDetail/>
              </Route>
              <Route path="/edit-product/:id">
                <EditProduct/>
              </Route>
              <Route path="/">
                <ProductCatalog />
              </Route>
            </Switch>
          </Row>
        </Container>

      </div>
    </Router>
  );
}

export default App;
