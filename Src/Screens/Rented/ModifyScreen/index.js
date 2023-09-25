import { View, Text,ScrollView,TouchableOpacity,Image,TextInput,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Fonts } from '../../../Themes/Fonts'
import { DocPlus, Location } from '../../../Themes/Images'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import PickupTime from '../../../Components/DropDown/PickupTime'
import ReturnTime from '../../../Components/DropDown/Return'

const ModifyScreen = ({navigation}) => {
    const [BtnState,setBtnState]=useState(0)
  return (
   <ScrollView contentContainerStyle={styles.MainCont} >
     <CustomHeader title={'Modify'}  onBackPress={()=>{navigation.goBack()}} />

     <Text style={styles.Subject_txt}>Subject</Text>


     <View  style={styles.SwitchCont} >
        <TouchableOpacity style={[styles.Switch,BtnState===0?styles.ActiveStyle:null]} onPress={()=>{setBtnState(0)}} >
         <Text style={[styles.Bobizz_Txt,BtnState===0?styles.ActiveTxt:null]} >Change the Meeting Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Switch,BtnState===1?styles.ActiveStyle:null]}   onPress={()=>{setBtnState(1)}} >
         <Text style={[styles.Bobizz_Txt,BtnState===1?styles.ActiveTxt:null]} >Change the Meeting Time</Text>
        </TouchableOpacity>
       </View>

        
       {BtnState===0?
        <View>
        <View  style={styles.InputCont} >
        <Text style={styles.Subject_Txt} >Current Meeting Location</Text>
        <View style={styles.Location_Cont} >
         <Text style={styles.Rolex_Txt}>Rolex Learning Center, 1015 Ecublens, Suisse</Text>
       </View>
       <Text style={styles.Subject_Txt} >Add the New Meeting Location</Text>
        <View style={styles.Location_Cont} >
       <TextInput style={styles.Input_Location} placeholder='Add a meeting point ' placeholderTextColor={Colors.Grey9} />
       <Image source={Location} style={styles.Location} />
       </View>
       <Text style={styles.Subject_Txt} >Description</Text>
       <TextInput style={styles.Input_Design} placeholder='Enter Description' placeholderTextColor={Colors.Grey9} />
      </View>
      <Text style={styles.Subject_Txt} >Upload up to 3 images:</Text>
       <View style={styles.Doc_Cont} >
        <TouchableOpacity onPress={()=>{}} >
        <Image style={styles.Img} source={DocPlus} />
        <Text style={styles.Upload_Txt} >Upload here</Text>
        </TouchableOpacity>
       </View>
       <CustomButton title={'Submit'} onPress={()=>{''}} />
       </View>:null
       }
        {BtnState===1? 
        <View>
        <View  style={styles.InputCont} >
        <Text style={styles.Subject_Txt} >Current Time</Text>
         <View style={styles.Cart} >
          <View style={styles.TimeDetail} >
            <Text style={styles.Pickup} >Pick up</Text>
            <Text style={styles.Time} >09:00 AM</Text>
          </View>
          <View style={styles.TimeDetail} >
            <Text style={styles.Pickup} >Return</Text>
            <Text style={styles.Time} >08:00 AM</Text>
          </View>
         </View>
        <Text style={styles.Subject_Txt} >Select New Time</Text>
        <View style={styles.TimePickCont} >
        <PickupTime/>
        <ReturnTime/>
     </View>
       <Text style={styles.Subject_Txt} >Description</Text>
       <TextInput style={styles.Input_Design} placeholder='Enter Description' placeholderTextColor={Colors.Grey9} />
      </View>
      <Text style={styles.Subject_Txt} >Upload up to 3 images:</Text>
       <View style={styles.Doc_Cont} >
        <TouchableOpacity onPress={()=>{}} >
        <Image style={styles.Img} source={DocPlus} />
        <Text style={styles.Upload_Txt} >Upload here</Text>
        </TouchableOpacity>
       </View>
       <CustomButton title={'Submit'} onPress={()=>{''}} />
       </View>:null

       }

   </ScrollView>
  )
}

export default ModifyScreen

const styles=StyleSheet.create({
    MainCont:{
        padding:'3%',
        backgroundColor:Colors.Bg
    },
    Subject_txt:{
        fontSize:14,
        fontFamily:Fonts.SF_Regular,
        color:Colors.Green,
        lineHeight:16,
        marginTop:"5%",
        marginBottom:"3%"
    },
    Location_Cont:{
       backgroundColor:Colors.White,
       borderRadius:5,
       flexDirection:'row',
       justifyContent:'space-between',
       paddingHorizontal:'4%',
       alignItems:'center',
       elevation:1,
       height:60,
    },
    Rolex_Txt:{
      fontSize:14,
      fontFamily:Fonts.SF_Medium,
      color:Colors.Black,
      lineHeight:16,
      
    },
    Location:{
      width:20,height:20,tintColor:Colors.Grey9,resizeMode:'contain'
    },
    
    SwitchCont:{
        flexDirection:"row",
        width:'100%',
        justifyContent:"space-between",
    },
    Switch:{
        width:'48%',
        alignItems:"center",
        padding:'3%',
        borderWidth:2,
        borderRadius:10,
        borderColor:Colors.Green,
    },
    Bobizz_Txt:{
        fontFamily:Fonts.SF_SemiBold,
        fontSize:10,
        color:Colors.Green,
        lineHeight:17
    },
    ActiveStyle:{
        backgroundColor:Colors.Green,
        borderWidth:0,
        justifyContent:'center',
        alignItems:"center"
    },
    ActiveTxt:{
        color:Colors.White
    },
    
 
  Subject_Txt:{
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
    color:Colors.Green,
    lineHeight:18,
   marginVertical:'4%'
  },
  Cart:{
    padding:'5%',
   
    backgroundColor:Colors.White,
    elevation:1,
    borderRadius:10,
    height:90,
    justifyContent:'space-between'
  },
  TimeDetail:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  Pickup:{
    color:Colors.Black,
    fontSize:14,
    fontFamily:Fonts.SF_SemiBold,
    lineHeight:16
  },
  Time:{
    color:Colors.Green,
    fontSize:14,
    fontFamily:Fonts.SF_Bold,
    lineHeight:16
  },


  Input_Design:{
    fontSize:14,
    fontFamily:Fonts.SF_Medium,
    color:Colors.Black,
    lineHeight:18,
    padding:'4%',
    elevation:1,
    backgroundColor:Colors.White,
    borderRadius:10,
  },
  Doc_Cont:{
    height:250,
    width:'100%',
    backgroundColor:Colors.White,
    borderRadius:10,
    elevation:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:100
  },
  Img:{
    width:50,height:50
  },
  Upload_Txt:{
    color:Colors.Grey9,
    fontSize:14,
    fontFamily:Fonts.SF_Regular,
     marginTop:'5%',
     textAlign:'center',
     marginLeft:"-2%"
  },
  TimePickCont:{
    backgroundColor:Colors.White,
  
    borderRadius:8,
    paddingVertical:'4%',
    paddingHorizontal:'1%',
    elevation:1,
    marginTop:'2%',
   
 },
 SelectTime:{
   fontSize:16,
   fontFamily:Fonts.SF_Medium,
   color:Colors.Black,
    marginLeft:'5%',
    marginBottom:'-2%'

 }
   
})