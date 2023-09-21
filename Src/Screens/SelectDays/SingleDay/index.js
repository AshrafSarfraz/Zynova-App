import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader2 from '../../../Components/CustomHeader2/CustomHeader2'

import PickupTime from '../../../Components/DropDown/PickupTime'
import ReturnTime from '../../../Components/DropDown/Return'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import CustomCalendar2 from '../Calender/Calender2'


const SingleDay = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.MainCont}  >
     <CustomHeader2 title={'Set Durations'} onBackPress={()=>{navigation.goBack()}} />
     <View style={styles.CalenderCont} >
        <CustomCalendar2/>
     </View>
     <View style={styles.TimePickCont} >
      <Text style={styles.SelectTime} >Select Time</Text>
        <PickupTime/>
        <ReturnTime/>
     </View>
     <CustomButton title={'Continue'} onPress={()=>{navigation.navigate('ReviewSummary')}} />
    </ScrollView>
  )
}

export default SingleDay
const styles=StyleSheet.create({
 MainCont:{
    backgroundColor:Colors.Bg,
    padding:"3%"
 },
 CalenderCont:{
    marginVertical:"5%",
    paddingHorizontal:"1%"
 },
 TimePickCont:{
    backgroundColor:Colors.White,
    borderWidth:0.2,
    borderRadius:8,
    paddingVertical:'4%',
    paddingHorizontal:'1%',
    elevation:1,
    marginTop:'2%',
    marginBottom:'20%'
 },
 SelectTime:{
   fontSize:16,
   fontFamily:Fonts.SF_Medium,
   color:Colors.Black,
    marginLeft:'5%',
    marginBottom:'-2%'

 }
})