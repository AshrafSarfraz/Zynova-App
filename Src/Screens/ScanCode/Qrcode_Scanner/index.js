import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image,TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Back_Icon, ScanBg } from '../../../Themes/Images';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';

const QrcodeScanner = ({ navigation }) => {
  const onSuccess = (e) => {
    console.log('Scanned QR code:', e.data);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={ScanBg} style={styles.imageBackground}>
        <View style={styles.HeaderCont} >
            <TouchableOpacity onPress={()=>{navigation.goBack()}} >
           <Image source={Back_Icon} style={styles.Back_Icon} />
           </TouchableOpacity>
           <Text style={styles.Scan_Txt} >Scan QR</Text>
        </View>
        <View style={styles.Body} >
        <QRCodeScanner
          onRead={onSuccess}
          cameraStyle={styles.cameraStyle}
          cameraProps={{ ratio: '1:1' }}
          topContent={null}
          bottomContent={null}
        />
        </View>
      </ImageBackground>
    </View>
  );
};

export default QrcodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1, 
    padding:"3%"
  },
  HeaderCont:{
    flex:0.1,
    flexDirection:"row",
    alignItems:"center"
  },
  Back_Icon:{
    width:30,height:30,
    tintColor:'#FFFFFF'
  },
  Scan_Txt:{
    fontSize:20,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    lineHeight:24,
    marginLeft:"4%"
  },
  Body:{
    flex:0.9,
    alignItems:'center',
    justifyContent:'center'
  },
  cameraStyle: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
});
