import React from "react";
import styled from "@emotion/styled";
import { FocusButton } from "../components";
import FocusImage from "../assets/images/meee.jpg";

export default function UboutUs() {
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
  `;
  const AboutUsContainer = styled.section`
    display: flex;
    height: 100%;
    color: #000;
  `;
  const Left = styled.div`
    flex: 1;
    flex-direction: column;
    margin: 2rem;
  `;
  const Information = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    opacity: 0.8;
    overflow: hidden;
  `;
  const Right = styled.div`
    width: 34%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: rgba(30, 30, 30, 1);
  `;
  const MyImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    opacity: 0.7;
    transition: 1s;
    object-fit: cover;

    &:hover {
      opacity: 0.9;
    }
  `;
  const FocusData = styled.aside`
    display: flex;
    width: 440px;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  `;

  return (
    <DefaultContainer id="aboutus">
      <Title>About us</Title>
      <Description>Who we are?</Description>
      <Body>
        <AboutUsContainer>
          <Left>
            <Information>
              At ArchSoftware, we believe in transforming the way businesses operate by harnessing the power of technology. Our journey began as a dynamic collaboration between undergraduate and graduate students who shared a common vision: to redefine technical support and sales processes through the use of AI solutions. <br/><br/>

              We specialize in developing cutting-edge software solutions that integrate AI to automate technical support and optimize ERP systems. Our chatbots are designed not only to reduce costs but also to enhance customer experiences by providing instant, accurate, and efficient responses. Additionally, our solutions enable businesses to gain deep insights into the key issues faced by their customers, empowering them to improve their products and services.<br/><br/>

              Our mission is to empower businesses to focus on what matters most their core business by providing tools that streamline operations, improve decision-making, and optimize resources. With a blend of academic rigor and entrepreneurial spirit, we are committed to delivering high-quality, scalable solutions that meet the evolving needs of modern businesses.

              Join us on our journey to revolutionize sales support and automation, one intelligent solution at a time.
            </Information>
            <FocusData>
              <FocusButton href="https://github.com/TryHardLearning" target="_blank" theTextInside={"GitHub"} />
              <FocusButton href="https://www.linkedin.com/in/lucas-c-bresolino/" target="blank" theTextInside={"Linkedin"} />
              <FocusButton href="https://wa.me/46988301339" theTextInside={"WhatsApp"} />
            </FocusData>
          </Left>
          <Right>
            <MyImg src={FocusImage} />
          </Right>
        </AboutUsContainer>
      </Body>
    </DefaultContainer>
  );
}
