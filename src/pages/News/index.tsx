import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/types';
import {
    Container,
    ContentNews,
    ContainerNews,
} from './styles';

import { Text, View, VirtualizedList, Image } from 'react-native';

interface iNews {
    title: string;
    content: string;
    id: number;
    urlToImage: string;
}

export const News: React.FC = () => {

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
            <View style={{ padding: 30, marginBottom: 2 }}>
                <ContainerNews>
                    <Text style={{ fontWeight: 'bold' }}>{News.title}</Text>
                    <Text style={{ marginTop: 5 }}>{News.content}</Text>
                    <Image
                        source={{
                            uri:News.urlToImage
                        }}
                        style={{
                            display:'flex',
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
