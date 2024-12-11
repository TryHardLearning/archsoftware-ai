import React from "react";
import styled from "@emotion/styled";

import FrontendImage from "../assets/images/front.png"
import BackendImage from "../assets/images/back.png"
import MobiledImage from "../assets/images/mobile.png"
import DatabaseImage from "../assets/images/database.png"
import ClouldImage from "../assets/images/cloud.png"

export default function Services() {
  
  const DefaultContainer = styled.section`
  
    padding: 50px 0;
    background-color: #000;
    color: #fff;
    margin: 2rem;
    border-radius: 8px;
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
  const Services = styled.section`
    display: flex;
     @media (max-width: 600px) {
      flex-direction: column;
    }
  `
  const AsService = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1.5px solid transparent;
    transition: 1s;
    &:hover {
      border-bottom: 1.5px solid var(--primary);
    }
    @media (max-width: 600px) {
        margin-top: 5rem;
    }
  `;
  const ImgTecnologyLogo = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
  `;
  const TecnologyArea = styled.h4`
    margin-top: 2rem;
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 300;
    color: #fff;
  `;
  const Tecnology = styled.p`
    margin-top: 1rem;
    font-size: 1.3rem;
    color: var(--primary);
  `;

  return (
    <DefaultContainer id="services">
      <Title>Services</Title>
      <Description>Services that we provide</Description>
      <Body>
        <Services>
          <AsService>
            <ImgTecnologyLogo src={FrontendImage} />
            <TecnologyArea>Artificial Intelligence Chatbot</TecnologyArea>
            <Tecnology>GPT - LLaMA - Python</Tecnology>
          </AsService>
          <AsService>
            <ImgTecnologyLogo src={MobiledImage} />
            <TecnologyArea>ERP with Artificial Intelligence</TecnologyArea>
            <Tecnology>GPT - LLaMA - Python</Tecnology>
          </AsService>
          <AsService>
            <ImgTecnologyLogo src={BackendImage} />
            <TecnologyArea>Backend</TecnologyArea>
            <Tecnology>NodeJs Golang C# Java</Tecnology>
          </AsService>
          <AsService>
            <ImgTecnologyLogo src={DatabaseImage} />
            <TecnologyArea>Database</TecnologyArea>
            <Tecnology>PostgreSQL MongoDB SQL-Server Firebase</Tecnology>
          </AsService>
          <AsService>
            <ImgTecnologyLogo src={ClouldImage}/>
            <TecnologyArea>Cloud</TecnologyArea>
            <Tecnology>Google Cloud Platform AWS</Tecnology>
          </AsService>
        </Services>
      </Body>
    </DefaultContainer>
  );
}
