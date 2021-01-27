import React from 'react';
import {  Dimensions, FlatList, View } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '..';

const CarsList = (props) => {

    return (
        <View style={styles.container}>
          <FlatList 
             data={cars}
             renderItem= {({item}) => <CarItem car={item}/>}
             snapToAlignment={'start'}
             decelerationRate={'fast'}
             snapToInterval={Dimensions.get('window').height}
          />
        </View>
    );
};

export default CarsList;