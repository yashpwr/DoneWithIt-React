import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import { useState } from 'react';

const initalMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    },
];
function MessagesScreen(props) {

    const [messages, setMessages] = useState(initalMessages);
    
    const handleDelete = message => {
        //Delete Message from messages
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => ( 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}  
                    onPress={() => console.log("cliked", item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />}       
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

    
    
})

export default MessagesScreen;