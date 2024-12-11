import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@mui/icons-material';
import styled from '@emotion/styled';
import React from 'react';
import myLogo from "../assets/images/logo.png";


export default function Footer() {
    const Logo = styled.h1`
        font-size: 4.5rem; /* Aumentado o tamanho do logo */
        color: #fff;
        transition: 0.7s ease;
        &:hover{
            color: var(--primary);
        }
        
    `;
    const Icon = styled.div`
        width: 4rem; /* Aumentado o tamanho dos ícones sociais */
        height: 4rem;
        border-radius: 50%;
        cursor: pointer;
    `;
    const Container = styled.section`
        font-size: 30px; /* Aumentado o tamanho base do texto */
    `;
    const LogoImg = styled.img`
        width: 4.5rem; /* Aumentado o tamanho dos ícones sociais */
        height: 4.5rem;
        transition: 0.3s;
        background: #000;
        &:hover {
            transform: rotateZ(35deg);
        }
    `;

    return (
        <Container className="footer fluid d-flex p-2" style={{background: '#000', color: '#fff'}} >
            <div className="left d-flex flex-column p-1" style={{ flex: '1' }}>
                <div className='d-flex' >
                <LogoImg src={myLogo} alt="" />
                <Logo className="logo fw500">ArchSoftware</Logo>
                </div>
                <p className="desc pt-1 pe-1" style={{ fontSize: '1.5rem' }}>
                    Custom-developed software to solve real business needs
                </p>
                <div className="social d-flex gap-3">
                    <Icon className="social-icon text-white d-flex justify-content-center align-items-center" style={{ backgroundColor: '#00eeff' }}>
                        <Facebook />
                    </Icon>
                    <Icon className="social-icon text-white d-flex justify-content-center align-items-center" style={{ backgroundColor: '#fe3922' }}>
                        <Instagram />
                    </Icon>
                    <Icon className="social-icon text-white d-flex justify-content-center align-items-center" style={{ backgroundColor: '#37ffae' }}>
                        <Twitter />
                    </Icon>
                    <Icon className="social-icon text-white d-flex justify-content-center align-items-center" style={{ backgroundColor: '#37fe47' }}>
                        <Pinterest />
                    </Icon>
                </div>
            </div>
            <div className="center p-2" style={{ flex: '1' }}>
                <h3 className="title fw-500 pb-2" style={{ fontSize: '2rem' }}>Useful Links</h3>
                <ul className="list list-unstyled d-flex flex-wrap" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="list-item w-50 p-0 mb-1">
                        <a href="#banner" className="link" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none' }}>Home</a>
                    </li>
                    <li className="list-item w-50 p-0 mb-1">
                        <a href="#aboutus" className="link" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none' }}>About Us</a>
                    </li>
                    <li className="list-item w-50 p-0 mb-1">
                        <a href="#services" className="link" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none' }}>Services</a>
                    </li>
                    <li className="list-item w-50 p-0 mb-1">
                        <a href="#projects" className="link" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none' }}>Projects</a>
                    </li>
                    <li className="list-item w-50 p-0 mb-1">
                        <a href="#contactus" className="link" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none' }}>Contact</a>
                    </li>
                    <li className="list-item w-50 p-0 mb-1">
                        <a href="#ourteam" className="link" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none' }}>Team</a>
                    </li>
                </ul>

            </div>
            <div className="right p-1" style={{ flex: '1' }}>
                <h3 className="title fw-500 pb-2" style={{ fontSize: '2rem' }}>Contact</h3>
                <div className="contact-item mb-3 d-flex align-items-center g-1 pointer-event" style={{ fontSize: '1.4rem' }}>
                    <Room />
                    <label className="ms-2" style={{ fontSize: '1.4rem' }}>Paraná - Brazil</label>
                </div>
                <div className="contact-item mb-3 d-flex align-items-center g-1" style={{ fontSize: '1.4rem' }}>
                    <Phone />
                    <label className="ms-2" style={{ fontSize: '1.4rem' }}>+55 46 98830 1339</label>
                </div>
                <div className="contact-item mb-3 d-flex align-items-center" style={{ fontSize: '1.4rem' }}>
                    <MailOutline />
                    <label className="ms-2" style={{ fontSize: '1.4rem' }}>YourEmailHere@exemple.com</label>
                </div>
            </div>
        </Container>
    );
}
