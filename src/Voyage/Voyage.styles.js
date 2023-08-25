import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop:60,
        margin:10,
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign:'center'
      },
      flightCard: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
      airline: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
      },
      mission:{
        fontStyle:'italic',
        fontSize:12,
        textAlign:'center',
        paddingTop:5
      }
})