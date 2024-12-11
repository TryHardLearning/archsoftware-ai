import React from "react";
import styled from "@emotion/styled";

import BgImage from "../assets/images/BgTeam.jpg"
import Mee from "../assets/images/MyPhoto.jpg"

export default function OurTeam() {

    const DefaultContainer = styled.section`
        width: 100%;
        padding: 50px 0;
        background-image: linear-gradient(rgba(30,30,30,0.5),rgba(30,30,30,0.7)), url('${BgImage}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
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
    `
    const Slide = styled.div`
        width: 280px;
        height: 340px;
        display: inline-block;
        margin-right: 2rem;
    `
    const SlideArea = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        background-color: rgba(30, 30, 30, 0.7);
        border: 1px groove var(--primary);
    `
    const TeamImg = styled.img `
        width: 180px;
        height: 180px;
        border: 1px groove rgba(30, 30, 30, 1);
        border-radius: 50%;
        object-fit: cover;
    `
    const TeamName = styled.h3 `
        text-transform: capitalize;
        font-weight: 300;
        font-size: 1.7rem;
        margin-top: 1.5rem;
        color: var(--primary);
    `
    const TeamRole = styled.p`
        font-size: 1.4rem;
        margin-top: 15px;
        color: #ccc;
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
        <DefaultContainer id="ourteam">
            <Title class="section-title">Our Team</Title>
            <Description class="section-desc">Our Co-workers</Description>
            <Body class="section-body">
                <Team class="team">
                    <Sliders class="sliders">
                        <Slide class="slide">
                            <SlideArea class="slide-area">
                               <TeamImg src={Mee} class="team-img"/>
                               <TeamName class="team-name">ERP and Chatbot Developer</TeamName>
                               <TeamRole class="team-role">Lucas C. Bresolino</TeamRole>
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
                                <TeamImg src={Mee} class="team-img"/>
                                <TeamName class="team-name">Backend Engineering</TeamName>
                                <TeamRole class="team-role">Lucas C. Bresolino</TeamRole>
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
                                <TeamImg src={Mee} class="team-img"/>
                                <TeamName class="team-name">Cloud and Database Developer</TeamName>
                                <TeamRole class="team-role">Lucas C. Bresolino</TeamRole>
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