import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/types';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconInfo from 'react-native-vector-icons/Feather';

import {
    Container,
    ContentNews,
    ContainerNews,
    ButtonBack,
    ButtonInfo,
} from './styles';

import {
    Text,
    View,
    VirtualizedList,
    Image,
    Linking,
    ActivityIndicator,
} from 'react-native';

interface iNews {
    title: string;
    content: string;
    id: number;
    urlToImage: string;
    url: string;
}

import { useNavigation } from '@react-navigation/native';


export const News: React.FC = () => {
    const navigation = useNavigation();

    const [News, setNews] = useState<iNews[]>([]);

    const {
        getNews
    } = useAuth();

    const allNews = async () => {
        const resultNews = await getNews();
        
        setNews(resultNews);
    }

    useEffect(() => {
        allNews();
    }, [])


    const Card = ({ News }: { News: iNews }) => {
        return (
            <View style={{
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: 2
            }}>

                <ContainerNews
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex'
                    }}>

                    <Text style={{
                        fontFamily: 'AGENCYB',
                        fontSize: 25,
                        textAlign: 'justify'
                    }}>

                        {News.title}

                    </Text>

                    <Text style={{
                        marginTop: 10,
                        fontFamily: 'AGENCYR',
                        fontSize: 20,
                        textAlign: 'justify'
                    }}>
                        {News.content}

                    </Text>

                    <Text
                        onPress={ () => Linking.openURL(News.url)}
                        style={{
                        color: 'red',
                        marginTop: 10,
                        marginBottom: 10,
                        fontFamily: 'AGENCYR',
                        fontSize: 20,
                        textAlign: 'justify'
                    }} >
                    Clique aqui para acessar a notícia completa!
                    </Text>

                    <Image
                        source={{
                            uri: News.urlToImage 
                        }}

                        style={{
                            borderRadius: 40,
                            margin: 20,
                            marginBottom: 80,
                            display: 'flex',
                            justifyContent: 'center',
                            width: 200,
                            height: 200,
                        }}
                    />

                </ContainerNews>
            </View>)
    }


    return (
        <Container>
            <ButtonBack onPress={() => navigation.navigate('Welcome', {})}>
                <Icon name="angle-left" size={40} color='white' />
            </ButtonBack>
            <ButtonInfo onPress={() => navigation.navigate('About', {})}>
                <IconInfo name="info" size={40} color='white' />
            </ButtonInfo>

            <ContentNews>
                <VirtualizedList<iNews>
                    data={News}
                    initialNumToRender={10}
                    renderItem={({ item }) => <Card News={item} />}
                    keyExtractor={item => item.title}
                    getItemCount={data => data.length}
                    getItem={(data, index) => data[index]}
                />
            </ContentNews>
        </Container>
    );
}
