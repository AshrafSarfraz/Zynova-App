import { View, Text,StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { Bobi_Logo } from '../../Themes/Images'
import { ChatData } from './DummyData'

const Disscuss = ({navigation}) => {
const [Loading,setLoading]=useState(false)
  
  
  setTimeout(() => {
    setLoading(true)
 }, 2000);




  const RenderItem=({item})=>(
    <TouchableOpacity  onPress={()=>{navigation.navigate('Chatting')}}>
      <View style={styles.Cart} >
        <View  style={styles.UserDetail_Cont} >
        <Image source={item.UserImg} style={styles.UserImg}  />
        <View style={styles.UserDetail} >
        <View style={styles.Title_Type_Cont} >
           <Text style={styles.Title} >{item.Title}</Text>
           <Text style={styles.Type} >{item.Type}</Text>
        </View>
        <Text style={styles.Desc} >{item.Description}</Text>
        </View>
        </View> 
        <View  >
        <Text style={styles.Day} >{item.Day}</Text>
        <Text style={styles.Time} >{item.Time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )




  return (
    <View style={styles.MainCont} >
          <View style={styles.HeaderCont} >
           <Image source={Bobi_Logo} style={styles.Bobi_Img} />
           <Text style={styles.Chat_Txt} >Chats</Text>
          </View>
          <View  style={styles.FlatList_Cont} >
          {Loading===false?
         <View style={styles.NoFoundCont} >
         <Image source={require('../../Assets/Images/NoChat.png')} style={styles.NoFoundData_Image} />
         <Text style={styles.NoFoundData} >Get a bobizzz to be able to chat with their owner</Text>
         </View>:
 
           <FlatList
           data={ChatData}
           renderItem={RenderItem}
           />
       
       }
          </View>
    </View>
  )
}

export default Disscuss

const styles=StyleSheet.create({
  MainCont:{
    backgroundColor:Colors.Bg,
    padding:'3%',
    flex:1
  },
  HeaderCont:{
     flexDirection:'row',
    alignItems:"center",
    marginTop:'2%'
  },
  Bobi_Img:{
    width:60,height:60,
    resizeMode:'contain'
  },
  Chat_Txt:{
    fontSize:20,
    fontFamily:Fonts.SF_SemiBold,
    lineHeight:24,
    marginLeft:"2%",
    color:Colors.Green
  },
  FlatList_Cont:{
   marginVertical:"4%"
  },
  Cart:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginBottom:'3%',
    borderRadius:10,
    padding:'3%'
  },
  UserImg:{
    width:50,height:50,
  },
  UserDetail_Cont:{
      flexDirection:'row',
      alignItems:'center',
    
  },
  UserDetail:{
    marginLeft:"5%"
  },
  Title_Type_Cont:{
    flexDirection:'row',
    alignItems:'flex-end',
    marginBottom:'2%', 
  },
  Title:{
     fontSize:16,fontFamily:Fonts.SF_SemiBold,
     color:Colors.Black,
     lineHeight:18,
     marginRight:3
  },
  Type:{
    fontSize:12,fontFamily:Fonts.SF_Medium,
    color:Colors.Green,
    lineHeight:14,
  },
  Desc:{
    fontSize:14,fontFamily:Fonts.SF_Medium,
    color:Colors.Black,
    lineHeight:18,
  },
  Day:{
    fontSize:12,fontFamily:Fonts.SF_Medium,
    color:'#6F6F6F',
    lineHeight:16,
   textAlign:'right'
  },
  Time:{
    fontSize:12,fontFamily:Fonts.SF_Medium,
    color:'#6F6F6F',
    lineHeight:16,
  },
  NoFoundCont:{
    height:520,
    justifyContent:'center',
    alignItems:"center"
  },
  NoFoundData_Image:{
    width:300,height:300,
    resizeMode:"contain"
  },
  NoFoundData:{
    fontSize:24,
    fontFamily:Fonts.SF_SemiBold,
    marginTop:" 10%",
    textAlign:'center',
    color:Colors.Green,
    width:'90%'
  }
})