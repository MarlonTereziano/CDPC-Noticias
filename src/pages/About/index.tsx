import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconBack from 'react-native-vector-icons/FontAwesome';
import IconInfo from 'react-native-vector-icons/Feather';


import {
    Container,
    ContentAbout,
    ButtonBack,
    ButtonInfo,
} from './styles';

import {Text} from 'react-native';


import { useNavigation } from '@react-navigation/native';


export const About: React.FC = () => {
    const navigation = useNavigation();


    return (
        <Container >
            <ButtonBack onPress={() => navigation.navigate('News', {})}>
                <IconBack name="angle-left" size={40} color='white' />
            </ButtonBack>
            <ButtonInfo onPress={() => navigation.navigate('About', {})}>
                <IconInfo name="info" size={40} color='white' />
            </ButtonInfo>

            <ContentAbout style={{
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: 2 }}>
                <Text style={{
                    fontFamily: 'AGENCYB',
                    fontSize: 30,
                    textAlign: 'justify'
                }}>
                    O QUE É A CDPC NOTÍCIAS?
                </Text>
                <Text style={{
                    marginTop: 30,
                    fontFamily: 'AGENCYR',
                    fontSize: 25,
                    textAlign: 'justify',
                    marginBottom:50
                }}>
                    A CDPC Notícias nasceu com um propósito bem definido: Ser a forma mais fácil de deixar
                    estudantes e população mais próximos da informação! Este portal de notícias na palma da sua mão
                    reune informações de diversas fontes, como por exemplo: UOL, Abril, Globo, CanalTech, entre inúmeras outras plataformas, sempre
                    filtrando informações relacionadas a Ciência, e não se preocupe, as atualizações são automáticas!
                </Text>
                <Icon name="newspaper-o" size={200} color='black' />
            </ContentAbout>
        </Container>
    );
}
