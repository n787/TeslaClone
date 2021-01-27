import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'absolute',
        top: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
    },
    logo:{
        width: 100,
        height: 50,
        resizeMode: "contain",
      
    },
   menu:{
       top: 10,
        width: 30,
        height: 30,
        //resizeMode: "contain",
    },
});

export default styles;