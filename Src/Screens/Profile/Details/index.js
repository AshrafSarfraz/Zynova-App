import { View, Text,StyleSheet,Image,FlatList,ImageBackground,TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { Fonts } from '../../../Themes/Fonts'
import { Colors } from '../../../Themes/Colors'
import { Data1 } from './Dummy'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import spacerStyles from '../../../Components/Spacers/style'

const Data=[
  {
    Image:require('../../../Assets/Images/HistoryProfile.png'),
    Icon:require('../../../Assets/Icons/arrow-top.png'),
    Title:'Maxime',
    Date:'23 December 2020',
    Payment:'',
    Price:'+54.23CHF'
  },
]



const Details = (props,{navigation}) => { // Change the parameter to 'props'


  const RenderItem2=({item})=>(
    <View style={styles.Cart1} >
      <View style={styles.Img_Detail_Cont} >
      <View style={styles.ImgCont} >
       <Image source={item.Image} style={styles.Img} />
      </View>
      <View style={styles.DetailsCont} >
       <Text style={styles.Title_Txt} >{item.Title}</Text>
       <Text style={styles.Date_Txt} >{item.Date}</Text>
       {item.Payment!==''?
        <Text style={styles.Payment_Txt} >{item.Payment}</Text>:null
       }
      </View>
      </View>
      <View style={styles.PriceCont} >
       <Image style={styles.Icon} source={item.Icon} />
       <Text style={styles.PRICE_Txt} >{item.Price}</Text>
      </View>

    </View>
   )


    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => { props.navigation.navigate('ProductDetails',{Data:item})  }}>
      <View style={styles.Cart}>
        <Image source={item.Image1} style={styles.Product_Img}  resizeMode='contain' />
        <TouchableOpacity onPress={() => { props.navigation.navigate('ProductDetails',{Data:item})  }}>
          <Text style={styles.Title}>{item.Title}</Text>
          <Text style={styles.MeetingPoint}>{item.MeetingPoint}</Text>
          <View style={{ flexDirection: 'row', marginBottom: "4%" }}>
            <Text style={styles.Price_Txt}>Price :</Text>
            <Text style={styles.Total}>{item.Price}</Text>
          </View>
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
    )
  
    return (
      <View style={styles.MainCont}>
        {Platform.OS == "ios" ? 
        <>
        <View style={spacerStyles.isDefault} />
        <CustomHeader title={'Details'} onBackPress={()=>{props.navigation.goBack()}} />
        </>   : 
        <CustomHeader title={'Details'} onBackPress={()=>{props.navigation.goBack()}} />
      }
        <View style={styles.Product} >
        <FlatList
          data={Data1}
          renderItem={renderItem}
        />
        </View>
         <View>
        <Text style={styles.From_Txt} >From</Text>
        <FlatList 
         data={Data}
         renderItem={RenderItem2}
        />
      </View>
      </View>
    )
  }
  
  export default Details
  
  const styles = StyleSheet.create({
    MainCont: {
      backgroundColor:Colors.Bg,
      padding:'3%',
      flex:1
    },
    Cart: {
      backgroundColor: Colors.White,
      borderRadius: 10,
      marginVertical:'3%',
      width: '100%',
      padding: '2%',
      flexDirection:'row',
      alignItems:'center'
    },
    Product_Img: {
      width:110, height: 100,
       marginRight:'4%'
    },
    
    Title: {
      fontSize: 14,
      fontFamily: Fonts.SF_Medium,
      lineHeight: 18,
      color: Colors.Black,
      marginVertical: '4%',
      marginHorizontal: '4%'
    },
    MeetingPoint: {
      fontSize: 10,
      fontFamily: Fonts.SF_Regular,
      lineHeight: 15,
      color: Colors.Green,
      width:150,
      marginBottom: '2%',
      marginLeft: '4%',
      marginRight:'1%',
    },
    Price_Txt: {
      fontSize: 12,
      fontFamily: Fonts.SF_Medium,
      lineHeight: 15,
      color: Colors.Black,
      marginBottom: '2%',
      marginHorizontal: '4%'
    },
    Total: {
      fontSize: 12,
      fontFamily: Fonts.SF_Medium,
      lineHeight: 15,
      color: Colors.Green,
      marginBottom: '2%',
      marginRight: '4%'
    },
    From_Txt:{
      fontSize: 18,
      fontFamily: Fonts.SF_Medium,
      lineHeight: 22,
      color: Colors.Black,
      marginVertical: '3%',
     
    },
    Cart1:{
      borderColor:Colors.Green,
      borderWidth:1,
      backgroundColor:Colors.White,
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'3%',
      paddingBottom:'5%',
      marginBottom:'3%',
      height:75
    },
    Img_Detail_Cont:{
        flexDirection:'row',
        alignItems:'center',
    },
    ImgCont:{
      marginRight:'7%',
    },
    Img:{
      width:40,height:40,
      
    },
    DetailsCont:{

    },
    Title_Txt:{
      fontSize:12,
      fontFamily:Fonts.SF_SemiBold,
      color:'#000000',
      marginVertical:'5%',
      lineHeight:16
    },
    Date_Txt:{
      fontSize:10,
      fontFamily:Fonts.SF_Regular,
      color:'#878787',
      marginBottom:'0%',
      lineHeight:16
    },
    Payment_Txt:{
      fontSize:8,
      fontFamily:Fonts.SF_Bold,
      color:Colors.Green,
      lineHeight:16
    },
    Icon:{
      width:20,height:20,
      alignSelf:'flex-end'
    },
    PRICE_Txt:{
      fontSize:16,
      fontFamily:Fonts.SF_Bold,
      color:Colors.Green,
      lineHeight:20,
      marginTop:'3%'
    },
  
  })
  