import { StyleSheet } from "react-native";

 const style = StyleSheet.create({
    Wrapper:{

        flexDirection:'column',
        backgroundColor:'#f4f4f4',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        padding:4

    },
    wrapper2:{
        
        width:350,
        marginTop: 10,
        borderRadius:5,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginRight:20,

    },
    Screen:{
        height:100,
        width:370,
        
        alignContent:'flex-start',
        alignItems:'flex-start',
        borderWidth:3,
        borderColor:'#e9f0f4',
        borderRadius:5,
        padding:5,
        
    },
    ResView:{
       height:50, 
       alignContent:'flex-end',
       alignItems:'flex-end',
       justifyContent:'center',
       alignSelf:'flex-start',
       position:'absolute',
       bottom:3,
       right:5
       
    },
    ResText:{
        fontSize:40,
        fontWeight:'500',
        color:'black' 
     },
    ScreenText:{
        fontSize:35,
        fontWeight:'400',
        color:'black'
    },
    ButtonBox:{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
        
    },
    Button:{
        alignItems:'center',
        backgroundColor:'#e9f0f4',
        height:90,
        width:90,
        padding:5,
        borderRadius:10,
        elevation:5,
        justifyContent:'center',
        flexDirection:'row'

    },
    equals:{
        backgroundColor:'#4bd086',
        
    },
    opt:{
        backgroundColor:'#f79505'
    },
    space:{
        height:5,
        
    },
    space2:{
        width:2,
    },
    btnTxt:{
        fontSize:25,
        fontWeight:'500',
        color:'black'
    }
});
export default style;