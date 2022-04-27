import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <h1 className="main-h1">Resty</h1>
      <nav className="nav-nav">
        <Nav defaultActiveKey="/" as="ul" style={{ display: "flex" }}>
          <Nav.Item as="li">
            <Nav.Link href="/">
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/history">History</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    </div>
  );
};

export default Header;
