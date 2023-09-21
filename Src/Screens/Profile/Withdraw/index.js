import { View, Text, ScrollView, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../Themes/Colors'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Fonts } from '../../../Themes/Fonts'
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Withdraw = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };

  return (
    <ScrollView contentContainerStyle={styles.MainCont} >
      <CustomHeader title={'Withdraw'} onBackPress={()=>{navigation.goBack()}}  />
      <View style={styles.InputCont} >
       <TextInput placeholder='Amount' placeholderTextColor={Colors.Grey9} style={styles.Input_Design} />
       <TextInput placeholder='First Name' placeholderTextColor={Colors.Grey9} style={styles.Input_Design} />
       <TextInput placeholder='Last Name' placeholderTextColor={Colors.Grey9} style={styles.Input_Design} />
       <TextInput placeholder='IBAN' placeholderTextColor={Colors.Grey9} style={styles.Input_Design} />
       <TextInput placeholder='Address' placeholderTextColor={Colors.Grey9} style={styles.Input_Design} />
       <View style={styles.container}>
          <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : null]}
          onPress={toggleCheckbox}
          >
         {isChecked && <Icons name="check" color="white" size={12} />}
         </TouchableOpacity>
         <Text style={styles.label}>Save for future use</Text>
         </View>

         <Text  style={styles.Amount_Txt} >
         5% of the amount will be deducted from your account as per th Bobi’s Terms & Condition
         </Text>
      </View>
      <CustomButton title={'Withdraw'} onPress={()=>{}} />
    </ScrollView>
  )
}

export default Withdraw

const styles=StyleSheet.create({
    MainCont:{
        backgroundColor:Colors.Bg,
        paddingHorizontal:'3%',
        paddingTop:'2%',
        paddingBottom:'5%'
    },
    InputCont:{
     paddingVertical:'6%'
    },
    Input_Design:{
        padding:'4%',
        backgroundColor:Colors.White,
        marginBottom:'3%',
        borderRadius:10,
        elevation:1,
        color:Colors.Black,
        fontSize:14,
        fontFamily:Fonts.SF_Medium,
        lineHeight:18

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop:'2%',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 3,
        borderRadius:5,
        borderColor: Colors.Green,
        marginRight: 10,
      },
      checked: {
        backgroundColor: 'green',
        alignItems:'center',
        justifyContent:'center',
        borderColor: Colors.Green,
      },
      label: {
        fontSize: 12,
        color: Colors.Grey5,
        fontFamily:Fonts.SF_Regular,
        lineHeight:16, 
      },
      Amount_Txt:{
        fontSize: 14,
        color: '#878787',
        fontFamily:Fonts.SF_Medium,
        lineHeight:18, 
        width:'90%',
        alignSelf:'center',
        textAlign:'center',
        marginTop:130,
        marginBottom:50
      },
})