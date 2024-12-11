import React from "react";
import styled from "@emotion/styled";

import INHD from "../assets/images/Work/INHD.png"
import NFS from "../assets/images/Work/NFS.webp"
import UTFPR from "../assets/images/Work/UTFPR.png"
import Inobram from "../assets/images/Work/Inobram.avif"

export default function WorkWith() {

    const DefaultContainer = styled.section`
        width: 100%;
        padding: 50px 0;
  `;
    const Title = styled.div`
        text-align: center;
        text-transform: capitalize;
        font-size: 2.4rem;
        font-weight: 600;
  `;
    const Description = styled.div`
        text-align: center;
        text-transform: capitalize;
        font-size: 1.7rem;
        font-weight: 600;
        color: #a0a0a0;
        margin-top: 1.3rem;
        margin-bottom: 4.5rem;
  `;
    const Body = styled.div`
        padding: 4rem;
        margin: auto;
        @media (max-width: 600px) {
            padding: none;
        }
  `;

    const Team = styled.section`
        overflow: hidden;
        max-width: 890px;
        margin: auto;
    `
    const Sliders = styled.div`
        width: 400vw;
        height: 100%;
        transition: 2s;
        @media (max-width: 600px) {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    `
    const Slide = styled.div`
        width: 280px;
        height: 340px;
        display: inline-block;
        margin-right: 2rem;
        @media (max-width: 600px) {
          margin-top: 4rem;
          margin-right: 0 !important;
        }
    `
    const SlideArea = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        background-color: rgba(30, 30, 30, 1);
    `
    const TeamImg = styled.img`
        width: 220px;
        height: 180px;
        border: 1px groove rgba(30, 30, 30, 1);
        object-fit: contain; /* Alternativa ao cover se quiser conter a imagem */
        object-position: center; /* Centraliza a imagem */
        display: block; /* Garante que a imagem não seja afetada por inline spacing */
        margin: auto; /* Centraliza horizontalmente se for dentro de um bloco */
        background-color: #000; /* Cor de fundo para áreas vazias (opcional) */

    `
    const TeamName = styled.h3`
        text-transform: capitalize;
        font-weight: 600;
        font-size: 1.7rem;
        margin-top: 1.5rem;
        color: var(--primary);
    `
    const TeamRole = styled.p`
        font-size: 1.4rem;
        margin-top: 15px;
        color: #ccc;
        text-align: center;
    `
    const LinkHub = styled.i`
        color: var(--primary);
        text-decoration: none;
        font-size: 1.7rem;
        margin: 20px 10px;
        background-color: transparent;
        &:hover{
            transform: scale(1.3);
        }
    `

    return (
        <DefaultContainer id="workwithus">
            <Title class="section-title">Professional Experience</Title>
            <Description class="section-desc">Positions and Tasks</Description>
            <Body class="section-body">
                <Team class="team">
                    <Sliders>
                        <Slide class="slide">
                            <SlideArea class="slide-area">
                                <TeamImg src={Inobram} class="team-img" />
                                <TeamName class="team-name">Backend Engineer</TeamName>
                                <TeamRole class="team-role">Typescript - Node.js - Express.js - Google Cloud Plataform - PostgreSQL</TeamRole>
                                <div class="team-links">
                                    <a href=""><LinkHub class="fab fa-linkedin-in"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-instagram"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-discord"></LinkHub></a>
                                    <a href="mailto:lucascaladob@gmail.com"><LinkHub class="fas fa-envelope"></LinkHub></a>
                                </div>
                            </SlideArea>
                        </Slide>
                        <Slide class="slide">
                            <SlideArea class="slide-area">
                                <TeamImg src={NFS} class="team-img" />
                                <TeamName class="team-name">Fullstack Developer</TeamName>
                                <TeamRole class="team-role">React.js - Javascript - Material Ui - Java - Spring Boot - Spring Web - Spring Data - Hibernate - PostgreSQL</TeamRole>
                                <div class="team-links">
                                    <a href=""><LinkHub class="fab fa-linkedin-in"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-instagram"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-discord"></LinkHub></a>
                                    <a href="mailto:lucascaladob@gmail.com"><LinkHub class="fas fa-envelope"></LinkHub></a>
                                </div>
                            </SlideArea>
                        </Slide>
                        <Slide class="slide">
                            <SlideArea class="slide-area">
                                <TeamImg src={UTFPR} class="team-img" />
                                <TeamName class="team-name">Indie Game Developer </TeamName>
                                <TeamRole class="team-role">Godot Engine - C# - .NET - SQLite</TeamRole>
                                <div class="team-links">
                                    <a href=""><LinkHub class="fab fa-linkedin-in"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-instagram"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-discord"></LinkHub></a>
                                    <a href="mailto:lucascaladob@gmail.com"><LinkHub class="fas fa-envelope"></LinkHub></a>
                                </div>
                            </SlideArea>
                        </Slide>
                    </Sliders>
                    <Sliders>
                        <Slide class="slide">
                            <SlideArea class="slide-area">
                                <TeamImg src={INHD} class="team-img" />
                                <TeamName class="team-name">Help Desk</TeamName>
                                <TeamRole class="team-role">Technical Support</TeamRole>
                                <div class="team-links">
                                    <a href=""><LinkHub class="fab fa-linkedin-in"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-instagram"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-discord"></LinkHub></a>
                                    <a href="mailto:lucascaladob@gmail.com"><LinkHub class="fas fa-envelope"></LinkHub></a>
                                </div>
                            </SlideArea>
                        </Slide>

                        <Slide class="slide">
                            <SlideArea class="slide-area">
                                <TeamImg src={UTFPR} class="team-img" />
                                <TeamName class="team-name">Extension Course Teacher</TeamName>
                                <TeamRole class="team-role">Computer assembly and maintenance</TeamRole>
                                <div class="team-links">
                                    <a href=""><LinkHub class="fab fa-linkedin-in"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-instagram"></LinkHub></a>
                                    <a href=""><LinkHub class="fab fa-discord"></LinkHub></a>
                                    <a href="mailto:lucascaladob@gmail.com"><LinkHub class="fas fa-envelope"></LinkHub></a>
                                </div>
                            </SlideArea>
                        </Slide>
                    </Sliders>
                </Team>
            </Body>
        </DefaultContainer>
    )
}