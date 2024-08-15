import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardAccount() {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: 'https://i.pinimg.com/originals/f8/f9/49/f8f9490270e4439b265112518ffce09f.jpg' }} 
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>zap zap premium</Text>
                <Text style={styles.description}>sopacommel@gmail.com</Text>

            </View>
            <AntDesign name="star" size={24} color="black"style={styles.icon}/>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
       display: 'flex',
       flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        gap: 15,
        padding: 25,
        flexDirection: 'row',
        
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 25,
    },
    content: {
        marginVertical: 10,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    icon: {
        marginTop: 10,
    },
});
