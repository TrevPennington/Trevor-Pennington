import React from "react"
import styled from "styled-components"

const Footer = styled.div`
    height: 10vh;
    margin-top: 5vh;
`
const Info = styled.p`
    width: 50%;
    font-size: 0.7em;
    text-align: center;
    margin: auto;
`
export default () => {
    return (
        <Footer>
            <Info>copyright 2020 by Trevor Pennington</Info>
        
        </Footer>
    )
}