import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'

const Graph = ({navigation}) => {
  return (
    <View>
      <CustomHeader title={'Choose Disponibilities'} onBackPress={()=>{navigation.goBack()}} />
       <View style={{height:'80%'}} />
      <CustomButton title={'Next'} onPress={()=>{navigation.navigate('Confirm_Post')}} />
    </View>
  )
}

export default Graph