import React from "react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import { Button }  from "../components";

import myBackground from "../assets/images/bgEl.jpg";

export default function Banner() {

  // Animação para o deslocamento infinito
  const scrollInfinite = keyframes`
    0% {
      margin-left: 0;
    }
    20% {
      margin-left: 0vw;
    }
    40% {
      margin-left: -100vw;
    }
    60% {
      margin-left: -100vw;
    }
    80% {
      margin-left: -200vw;
    }
    100% {
      margin-left: -200vw;
    }
  `;

  const BannerContainer = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${myBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 100px);
    overflow: hidden;
  `;
  const Sliders = styled.div`
    width: 400vw;
    height: 100%;
    animation: ${scrollInfinite} 10s linear infinite; 
    transition: 2s;
  `;
  const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: inline-block;
  `;
  const Context = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    z-index: 1000;
  `;
  const PrimaryText = styled.h1`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
  `;
  const AccentText = styled.span`
   text-transform: capitalize;
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
    color: var(--primary);
  `;

  const SubText = styled.h2`
    margin-top: 2rem;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1.8rem;

    &::after {
      content: "";
      width: 0;
      height: 2px;
      background: var(--primary);
      display: block;
      margin: auto;
      transition: 0.5s;
    }

    &:hover::after {
      width: 100%;
      box-shadow: 0 0 4px var(--primary);
    }
  `;

  const SelectPoint = styled.div`
    width: 100vw;
    height: 1.5rem;
    position: absolute;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Points = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid var(--primary);
    border-radius: 8px;
    margin: 0 4px;
    cursor: pointer;
    &:hover {
      background-color: var(--primary);
    }
  `;

  return (
    <BannerContainer id="banner">
      <Sliders>
        <Slide>
          <Context>
            <PrimaryText>
            The best solutions for your
              <br />
              <AccentText>business</AccentText>
            </PrimaryText>
            <SubText>ArchSoftware</SubText>
            <Button theTextInside={"Contact me"} href={'https://wa.me/46988301339'} />
          </Context>
        </Slide>
        <Slide>
          <Context>
            <PrimaryText>
              AI-powered sales and support <br /> automation solutions
              <br />
              <AccentText>GPT LLaMA</AccentText>
            </PrimaryText>
            <SubText>ArchSoftware</SubText>
          </Context>
        </Slide>
        <Slide>
          <Context>
            <PrimaryText>
              ERP solution Integrated With
              <br />
              <AccentText>Artificial Intelligence</AccentText>
            </PrimaryText>
            <SubText>ArchSoftware</SubText>
          </Context>
        </Slide>
      </Sliders>
      <SelectPoint>
        <Points></Points>
        <Points></Points>
        <Points></Points>
      </SelectPoint>
    </BannerContainer>
  );
}
