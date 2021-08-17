import React from 'react';
import { useAuth } from '../../hooks/types';
import {
    Container,
    ContentNews,
} from './styles'; 

import {Text} from 'react-native';

export const News: React.FC = () => {
    const {
        getNews 
    } = useAuth();

    const allNews = async () =>{
        await getNews({
        })
    }

    return(
        <Container>
            <ContentNews>
                <Text>
                    {allNews}
                </Text>
            </ContentNews>
        </Container>
    );
}
