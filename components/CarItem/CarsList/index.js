import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = (props) => {
    console.log(cars);
    return (
        <View style={styles.container}>
            <FlatList 
             data={cars}
             renderItem={({item})=> <CarItem car={item}/>}
            />
        </View>
    );
};

export default CarsList;