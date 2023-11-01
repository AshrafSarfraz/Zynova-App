import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { Back_Icon, Qrcode, ScanBg } from '../../../Themes/Images'
import { Colors } from '../../../Themes/Colors'
import spacerStyles from '../../../Components/Spacers/style'

const ScanQrCode = ({ navigation }) => {
  return (
    <View style={styles.MainCont} >
      <ImageBackground source={ScanBg} style={styles.Bg} >

        {Platform.OS == "ios" ? 
        <>
        <View style={spacerStyles.isDefault} />
        <View style={styles.HeaderCont} >
          <TouchableOpacity onPress={() => { navigation.goBack() }} >
            <Image source={Back_Icon} style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.Title}>Scan QR</Text>
        </View>
        </> : 
        <View style={styles.HeaderCont} >
          <TouchableOpacity onPress={() => { navigation.goBack() }} >
            <Image source={Back_Icon} style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.Title}>Scan QR</Text>
        </View>
        }

        <View style={styles.Body} >
          <Image source={Qrcode} style={styles.qrcode} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default ScanQrCode

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,

  },
  Bg: {
    flex: 1,
    resizeMode: 'contain',
    padding: '3%'
  },
  HeaderCont: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Icon: {
    width: 30, height: 30, tintColor: Colors.White, marginRight: "3%"
  },
  Title: {
    fontSize: 20,
    color: Colors.White,
    lineHeight: 22
  },
  Body: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: "center"
  },
  qrcode: {
    width: '80%', height: 250
  }
})