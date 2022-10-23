import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#798eb8",
        borderRadius:8,
        marginHorizontal:10,
        margin:5,
    },
    completed_container:{
        backgroundColor:"#4e5664",
        borderRadius:8,
        marginHorizontal:10,
        margin:5,
    },
    task:{
        paddingVertical:8,
        paddingHorizontal:10,
        fontSize:18,
        color:"#EEEEEE"
    },
    completed_task:{
        paddingVertical:8,
        paddingHorizontal:10,
        fontSize:18,
        color:"black",
        textDecorationLine: 'line-through'
    }
});