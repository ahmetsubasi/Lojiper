import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    marginTop:50,
    },
    title: {
      textAlign:'center',
      fontSize: 24,
      marginBottom: 20,
    },
    check_container:{
      alignSelf:'center',
      flexDirection:'row',
      gap:10,
      marginTop:10
    },
    checkText:{
      fontSize:16,
      fontWeight:'bold'
    },
    selectText:{
      fontSize:16,
      fontWeight:'bold',
      marginTop:30,
      paddingLeft:3,
      paddingVertical:5
    },
})