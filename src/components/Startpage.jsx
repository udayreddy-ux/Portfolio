import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import { BsHouseDoor, BsPerson } from "react-icons/bs";
import { AiOutlineFundView, AiOutlineMessage, AiOutlineFileText } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { FaCodeFork } from "react-icons/fa6";
import React, { useState } from 'react';
export default function Startpage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <Navbar className="custom-navbar">
            <Navbar.Brand className="custom-navbar-brand">
                <LinkContainer to="/Home">
                <img src="ninja.png" alt="Welcome" className='navbar-logo'/>
                </LinkContainer>
            </Navbar.Brand>
            <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
                <LinkContainer to="/Home">
                <Nav.Link className="custom-nav-link"><BsHouseDoor/>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/About">
                <Nav.Link className="custom-nav-link"><BsPerson/>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Projects">
                <Nav.Link className="custom-nav-link"><AiOutlineFundView/>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                <Nav.Link className="custom-nav-link"><AiOutlineMessage/>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Resume">
                <Nav.Link className="custom-nav-link"><AiOutlineFileText/>Resume</Nav.Link>
                </LinkContainer>
                <Nav.Link as="a" href="https://github.com/udayreddy-ux" target='_blank' className="custom-nav-link">
                <FaCodeFork style={{ color: 'blue' }}/>
                </Nav.Link>
            </div>
            <div className="hamburger" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Navbar>
        <Outlet />
        </>
    );
}