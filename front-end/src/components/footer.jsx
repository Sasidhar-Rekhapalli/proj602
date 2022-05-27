import react,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

const Container = styled.div.attrs({
    className:'container'
})`
padding:20px;
`

const Footerdiv = styled.div`
background-color:#75767A;
`

const TextP = styled.p`
    text-align:center;
    color:white;
`
const AText = styled.a`
    margin:0px 5px;
    cursor:pointer;
    text-decoration:none;
    color:white;
`

function footer(){
    return(
        <Container>
            <Footerdiv>
                <TextP>
                    <AText>Disclaimer</AText>|
                    <AText>PrivacyVision</AText>
                    <AText> | © Saskatchewan Polytechnic | </AText>
                    <AText>Vision</AText>
                </TextP>
            </Footerdiv>
        </Container>
    )
}

export default footer;