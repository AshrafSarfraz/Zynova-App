import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'



const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.Bg,
        padding:'3%',
      
    },
    Flatlist_View:{
         marginTop:'5%'

        
      
    },
  
   
    Card_View:{
    flexDirection:'row',
    borderRadius:10,
    backgroundColor:Colors.Green,
    padding:'2%',
   
   
    
    
    },
    Alarm_Imge:{
    height:80,
    width:80,
    borderRadius:40,
   
    },
   
    Texts_View:{
        marginLeft:10,
        alignSelf:'center',
        justifyContent:'center',
        width:'65%'
    },
    separator: {
        height: 12, // Adjust the height as needed for spacing
        // Change to your desired separator color
      },
    Info_Text:{
         
        fontSize:12,
        fontWeight:'500',
         fontFamily:Fonts.SF_Regular,
        color:Colors.White,
        lineHeight:26,
       
    },
    Type_Text:{
        fontSize:14,
        fontWeight:'500',
         fontFamily:Fonts.SF_SemiBold,
        color:Colors.White,
        lineHeight:18,
       
    },
    
    Circular_View:{
        padding:'4%',
        borderRadius:20,
        paddingRight:'2%'
    },


    Time_Text:{
        fontSize:12,
        fontWeight:'400',
         fontFamily:Fonts.SF_Regular,
        color:Colors.White,
        lineHeight:16,
       
    },
    BtnCont:{
        flexDirection:'row',
        alignItems:"center"
    },
   
    Btn_Txt:{
        fontSize:12,
        fontWeight:'400',
         fontFamily:Fonts.SF_Medium,
        color:Colors.White,
        lineHeight:16,
    },
    Footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:"6%",
        
    },
    Image2:{
        width:15,height:15,
        tintColor:Colors.White
    }

})

export default style