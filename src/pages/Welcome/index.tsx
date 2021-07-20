import React from 'react';
import {Container, Title, Logo} from './styles'; 
import LogoIF from '../../assets/img/if.png';




export const Welcome: React.FC = () => {

    return(
        <Container>
            <Title>AAAA👋</Title>
            <Logo source = {LogoIF}/>
        </Container>
    );
}

  