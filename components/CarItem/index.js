import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from './StyledButton';
import styles from './styles';

const CarItem = (props) => {

    /*name: Model S
    tagline: Starting at $69,420
    image: require("../../assets/images/ModelX.jpeg")
    */
    const{name,tagline,image,taglineCTA} = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
           
            source={image}
            style={styles.image}
            >

            <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
                {tagline} {''}
                <Text style={styles.subtitleCTA}>
                    {taglineCTA}
                </Text>
            </Text>
            </View>

            <View style={styles.buttonContainer}>
            <StyledButton 
                type="primary" 
                content={"Custom Order"}
                onPress={()=> {console.warn("Custom Order was Passed")
                }} 
            />
            <StyledButton 
                type="secondary" 
                content={"Existing Inventory"}
                onPress={()=> {console.warn("Existing Inventory was Passed")
                }} 
            />
            </View>
        </ImageBackground>
       
        </View>
    );    
}

export default CarItem;