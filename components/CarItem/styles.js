import { StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer:{
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
    carContainer:{
        width:"100%",
        height: Dimensions.get('window').height,
      },
      headerContainer:{
        position: "absolute",
        //top: 20,
       // zIndex: 100,
       // flexDirection: "row",
        justifyContent :"flex-start", 
        width: "100%",
        
      },
      image:{
        width: "100%",
        height: "100%",
        resizeMode: "contain"
        
      },
      titles:{
        marginTop: "30%",
        width:"100%",
        alignItems:"center",
      },
      title:{
        fontSize: 40,
        fontWeight:"500"
    
      },
      subtitleCTA:{
        textDecorationLine: "underline",
      },
      subtitle:{
        fontSize: 16,
        color:"gray",
      },
      
      
});

export default styles;