import React from "react";
import styled from "@emotion/styled";

export default function FocusButton({theTextInside, href}) {

    const TheButton = styled.a`
        display: inline-block;
        background-color: #000;
        color: var(--primary);
        text-transform: capitalize;
        font-size: 1.7rem;
        text-decoration: none;
        padding: 0.7rem 3rem;
        margin-top: 2rem;
        border-radius: 8px;
        transition: 1.1s;

        &:hover{
            background-color: var(--primary);
            color: #000;
        }
    `
    return (
        <TheButton href={href} target="_blank">{theTextInside}</TheButton>
    )
}