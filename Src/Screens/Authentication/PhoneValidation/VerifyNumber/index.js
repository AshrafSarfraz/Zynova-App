import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from 'react-native-phone-number-input'
import CustomHeader from '../../../../Components/CustomHeader/CustomHeader'
import { Colors } from '../../../../Themes/Colors'
import { T_Logo } from '../../../../Themes/Images'
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { styles } from './style';
import spacerStyles from '../../../../Components/Spacers/style';

const PhoneValidation = ({ navigation }) => {
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  return (
    <ScrollView contentContainerStyle={styles.Main_Container} >
      {Platform.OS == "ios" ?
        <>
        <View style={spacerStyles.isDefault} />
          <CustomHeader onBackPress={() => { navigation.goBack() }} />
        </> :
        <CustomHeader onBackPress={() => { navigation.goBack() }} />
      }
      <Image source={T_Logo} style={styles.Logo} />
      <Text style={styles.Header_Txt} >Verify your number to continue</Text>
      <View style={styles.PhoneInputCont} >
        <PhoneInput
          defaultValue={PhoneNumber}
          defaultCode='US'
          placeholder='000 000 000'
          onChangeFormattedText={(txt) => { setPhoneNumber(txt) }}
          containerStyle={{ width: '98%', elevation: 1, marginBottom: "3%", height: 60, borderRadius: 12, backgroundColor: '#FFFFFF', alignSelf: 'center', overflow: '', borderWidth: PhoneNumber.length === 0 ? 0 : 1, borderColor: PhoneNumber.length >= 11 ? Colors.Green : Colors.Red }}
          textContainerStyle={{ backgroundColor: Colors.White, }}
          textInputProps={{ fontSize: 14, color: '#000000', padding: '0%', }}
        />
        {PhoneNumber.length < 11 ? <Text style={styles.Error} >This phone number is invalid</Text> : null}
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : null]}
          onPress={toggleCheckbox}
        >
          {isChecked && <Icons name="check" color="white" size={12} />}
        </TouchableOpacity>
        <Text style={styles.label}>By entering my number, I agree to Bobi’s Terms & Conditions</Text>
      </View>

      <CustomButton title={"Next"} onPress={() => { navigation.navigate('Otp', { Phone: PhoneNumber }) }} />
    </ScrollView>
  )
}

export default PhoneValidation

