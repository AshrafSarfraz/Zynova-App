import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { W_Flag } from '../../../Themes/Images'

const Cancel_Modify = ({navigation}) => {
  return (
    <View style={styles.MainCont} >
        <View style={styles.Header} >
        <CustomHeader title={'Modify/Cancel'} onBackPress={()=>{navigation.goBack()}} />
        </View>

        <View style={styles.Body} >
        <TouchableOpacity onPress={()=>{navigation.navigate('SingleDay')}} style={styles.Carts1} >
        <Text style={styles.Day_Txt} >Modify</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('MultipleDay')}} style={styles.Carts1} >
        <Text style={styles.Day_Txt} >Cancel</Text> 
        </TouchableOpacity>
        </View>
        <View style={styles.Footer} >
        <TouchableOpacity style={styles.Btn}  onPress={()=>{navigation.navigate('ReportSubmit')}} >
            <Image source={W_Flag} style={styles.Plus1} />
            <Text  style={styles.Rent}>Report Problem</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Cancel_Modify

const styles=StyleSheet.create({
    MainCont:{
        flex:1,
        backgroundColor:Colors.Bg,
        padding:'3%'
    },
    Header:{
        flex:0.1,
    },
    Body:{
        flex:0.8,
        alignItems:'center',
        justifyContent:'center'
    },
    Carts1:{
      width:'96%',
      height:130,
      marginBottom:'10%',
      borderRadius:10,
      alignItems:"center",
      borderColor:Colors.Green,
      borderWidth:2,
      justifyContent:'center',
      alignItems:"center"
 },
   
    Day_Txt:{
        color:Colors.Green,
        fontSize:22,
        fontFamily:Fonts.SF_SemiBold,
        lineHeight:30,
       
    },
    Btn:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#E31D1C',
        width:'100%',
        borderRadius:10,
        height:60
      },
      Plus1:{
        width:12,height:14,
        tintColor:Colors.Red
        
      },
      Rent:{
        color:Colors.Red,
        fontSize:16,
        fontFamily:Fonts.SF_SemiBold,
        lineHeight:20,
        marginHorizontal:'2%'
       
      },
      Footer:{
        flex:0.1
      }

    
})