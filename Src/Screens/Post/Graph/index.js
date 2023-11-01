import { View, Text, Platform } from 'react-native'
import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import spacerStyles from '../../../Components/Spacers/style'

const Graph = ({navigation}) => {
  return (
    <View>
      {Platform.OS == "ios" ? 
      <>
      <View style={spacerStyles.isDefault} />
      <CustomHeader title={'Choose Disponibilities'} onBackPress={()=>{navigation.goBack()}} />
      </> : 
      <CustomHeader title={'Choose Disponibilities'} onBackPress={()=>{navigation.goBack()}} />
    }
       <View style={{height:'80%'}} />
      <CustomButton title={'Next'} onPress={()=>{navigation.navigate('Confirm_Post')}} />
    </View>
  )
}

export default Graph