import React from 'react';
import {
    Container,
    Title, 
    LogoCampus,
    LogoPc,
    ContentTitle,
    TitleRed,
    TitleCDPC,
    ButtonEntrar,
    Footer,
    ContainerLeft,
    ContainerRight,
    TextEntrar,
} from './styles'; 

import LogoIF from '../../assets/img/if.png';
import LogoCdpc from '../../assets/img/cdpc.png';
import { useNavigation } from '@react-navigation/native';


export const Welcome: React.FC = () => {
    const navigation = useNavigation();

    return(
        <Container>
            <ContentTitle>
                <TitleRed>   C</TitleRed>
                <TitleCDPC>DPC   </TitleCDPC>
                <TitleRed>N</TitleRed>
                <TitleCDPC>OTÍCIAS</TitleCDPC>
            </ContentTitle>

            <Title>BEM-VINDO !</Title>
            <ButtonEntrar onPress={() => navigation.navigate('News', {})}><TextEntrar>ENTRAR</TextEntrar></ButtonEntrar>

            <Footer>
                <ContainerLeft>
                <LogoCampus source = {LogoIF}/>
                </ContainerLeft>
                <ContainerRight>
                <LogoPc source = {LogoCdpc}/>
                </ContainerRight>
            </Footer>
        </Container>
    );
}

  