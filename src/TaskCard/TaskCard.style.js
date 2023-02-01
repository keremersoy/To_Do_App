import { StyleSheet } from "react-native";

export default StyleSheet.create({
    outer_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        padding:5,
        borderRadius:8,
        marginHorizontal:10,
        margin:5,
    },
    container:{
        backgroundColor:"#798eb8"
    },
    completed_container:{
        backgroundColor:"#4e5664"
    },
    task_container:{
        paddingVertical:8,
        paddingHorizontal:10,
        fontSize:18,
        flex:1
    },
    task:{
        color:"#EEEEEE"
    },
    completed_task:{
        color:"black",
        textDecorationLine: 'line-through'
    }
});