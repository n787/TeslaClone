import React from 'react';
import { Text, View ,Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
   /* const type = props.type;   // check primary or secondary button
    const content =  props.content;   // Button name
    const onPress = props.onPress;   // message we want to throw after press the button  */

    const{type, content,onPress } = props;
    console.warn(type);

    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "#FFFFFFA6" : "#171A20CC";
    return (
        <View style={styles.container}>
            <Pressable
            style = {[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() =>  onPress()   }
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;