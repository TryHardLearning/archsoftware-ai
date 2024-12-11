import React from "react";
import styled from "@emotion/styled";
import DefaultImage from "../assets/images/code.png"

export default function Project({Link, Name, Description}) {
  
  const ProjectDeveloped = styled.div`
    width: 260px;
    height: 180px;
    margin: 10px;
  `;
  const ImgWrap = styled.div`
    width: inherit;
    height: inherit;
    overflow: hidden;
  `;
  const ProjectImge = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const ProjectInfo = styled.a`
    position: absolute;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.55);
    transition: 0.5s ease;
    &:hover {
      box-shadow: 0 0 22px #000;
      background: rgba(0, 0, 0, 08);
    }
  `;
  const ProjectName = styled.h5`
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    color: var(--primary);
    text-wrap: wrap;
    
  `;
  const ProjectDescription = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    text-wrap: wrap;
  `;
  return (
          <ProjectDeveloped>
            <ImgWrap>
              <ProjectInfo href={Link}>
                <ProjectName>{Name}</ProjectName>
                <ProjectDescription>{Description}</ProjectDescription>
              </ProjectInfo>
              <ProjectImge src={DefaultImage} />
            </ImgWrap>
          </ProjectDeveloped>
  );
}
