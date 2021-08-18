import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/types';
import {
    Container,
    ContentNews,
} from './styles'; 

import {Text, View, VirtualizedList} from 'react-native';

interface iNews{
    titulo: String;
    id: Number;
}

export const News: React.FC = () => {

    const [News, setNews] = useState<News[]>([]);

    const {
        getNews 
    } = useAuth();

    const allNews = async () =>{
        const resultNews = await getNews();
        setNews(resultNews);
    }


    useEffect(() => {
        allNews();
    }, [])


    const Card = ({News}:{News: iNews})=>{
        return (
         <View style = {{padding: 30, backgroundColor:'red', marginBottom: 2}}>
           <Text>{News.titulo}</Text>
           {/* <Image
            source={{
              uri: photo.img_src
            }}
            style={ {
              width: 'auto',
              height: '80%',
            }}
          /> */}
         </View>)
       }

    return(
        <Container>
            <ContentNews>
            <VirtualizedList<iNews>
                data={News}
                initialNumToRender={10}
                renderItem={({ item }) => <Card News={item}/>}
                keyExtractor={item => item.id.toString()}
                getItemCount={data => data.length} 
                getItem = {(data,index) => data[index]}
            />
            </ContentNews>
        </Container>
    );
}
