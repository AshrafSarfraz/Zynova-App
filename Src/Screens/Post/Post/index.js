import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Add_circle,  Bobi_Logo, Scan, shout } from '../../../Themes/Images'
import { Colors } from '../../../Themes/Colors'
import { Fonts } from '../../../Themes/Fonts'
import { PostData } from './DummyData'
import NewObjectAlert from '../../../Components/Alerts/ObjectAlert'
import { useRoute } from '@react-navigation/native'

const Post = ({navigation}) => {
  const route=useRoute();
   const [Data,setData]=useState(false)
   const [alertVisible, setAlertVisible] = useState(false);

   useEffect(() => {
    if (route.params && route.params.updateButtonState) {
      setData(true);
    }
  }, [route.params]);



  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { 
          if(item.Id===1){
            navigation.navigate('PostModify')
          }
          else{
            navigation.navigate('PostDetails',{Data:item})  
          }


        }}>
          
        <View style={styles.Cart}>
            <View style={styles.Item_Detail} >
            <Image source={item.Image1} style={styles.Product_Img} resizeMode='cover' />
            <View style={{marginLeft:"6%"}} >
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >  
            <Text style={styles.Title}>{item.Title}</Text>
            {item.Pause!=='' ?  
             <Image source={item.Pause} style={styles.Pause_Img} resizeMode='cover' />: null}
            </View>
            <View style={{ flexDirection: 'row',marginTop:"3%"  }}>
              <Text style={styles.Time_Txt}>Pick up:</Text>
              <Text style={styles.Time}>{item.Pick}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop:"3%" }}>
              <Text style={styles.Time_Txt}>Return:</Text>
              <Text style={styles.Time}>{item.Return}</Text>
            </View>
            </View>
            </View>
            <View>
                
            <TouchableOpacity  style={styles.ScanImg} >
                <Image source={Scan} style={styles.ScanImg} />
            </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
      )





  return (
   <View style={styles.MainCont} >
    <View style={styles.HeaderCont} >
      <Image source={Bobi_Logo} style={styles.Bobi_Logo}  />
      <Text style={styles.Post_Txt} >Post</Text>
    </View>
    <View style={styles.Body} >
    {Data===true? <View>
        <FlatList
        data={PostData}
        renderItem={renderItem}
      />
       </View>:
       
        <View style={styles.Body} >
        <Image style={styles.Logo1} source={require('../../../Assets/Images/Logo1.png')} />
        <Image style={styles.Img} source={shout} />
        <Text style={styles.Object_Txt} >Post object to get Bobizzz</Text>
        <Image style={styles.Hi_Fi_Logo} source={require('../../../Assets/Images/Hi_Fi_Logo.png')} />
        </View>
       }
     </View>
        <TouchableOpacity style={styles.Object_Btn} onPress={showAlert} >
            <Image source={Add_circle}  style={styles.Add_circle} />
            <Text style={styles.Obj_Txt} >Add Object</Text>
        </TouchableOpacity>

        
        <NewObjectAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert()}}
        onAgree={()=>{hideAlert(),navigation.navigate('Add_Object')}}
      />
    </View>
  )
}

export default Post

const styles=StyleSheet.create({
   MainCont:{
    padding:'3%',
    flex:1,
    backgroundColor:Colors.Bg
   },
   HeaderCont:{
    flexDirection:'row',
    alignItems:"center",
    flex:0.1
   },
   Bobi_Logo:{
    width:60,height:60,
    resizeMode:'contain'
   },
   Post_Txt:{
    fontSize:20,lineHeight:24,
    color:Colors.Green,
    fontFamily:Fonts.SF_SemiBold,
    marginLeft:'2%'
   },
   Body:{
       flex:0.9,
       alignItems:'center',
       justifyContent:'center'
   },
   Img:{
    width:300,height:300,
    resizeMode:'contain',
    bottom:'2%'
   },
   Object_Txt:{
    fontSize:20,lineHeight:24,
    color:Colors.Green,
    fontFamily:Fonts.SF_SemiBold,
    
   },
   Hi_Fi_Logo:{
    width:100,height:100,
    resizeMode:'contain',
    right:'35%'
   },
   Logo1:{
    width:100,height:100,
    resizeMode:'contain',
    left:'35%'
   },
   Object_Btn:{
    width:150,
    height:65,
    backgroundColor:Colors.Green,
    flexDirection:'row',
    alignItems:"center",
    borderRadius:10,
    justifyContent:'center',
    zIndex:1,
    position:'absolute',
    top:"90%",
    right:'5%'
   },
   Add_circle:{
    width:25,height:25,marginRight:'7%'
   },
   Obj_Txt:{
    fontSize:16,lineHeight:19,
    color:Colors.White,
    fontFamily:Fonts.SF_SemiBold,
   },
   
   Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    marginTop:"4%",
    width: '100%',
  
    padding: '2%',
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"space-between"
  },
  Item_Detail:{
    flexDirection:"row",
    alignItems:"center",
  },
  ScanImg:{
    width:20,height:20,
    bottom:'2%',
    right:'15%'
  },
  Pause_Img:{
    width:23,height:23,
    left:'580%'
     
    
    
     

  },
  Product_Img: {
    width: 100, height: 80,
    borderRadius:10 
  },
  Wishlist: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    top: '5%',
    right: '5%'
  },
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 18,
    color: Colors.Black,
    
   
  },
  
 Time_Txt: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Black,
   
  },
  Time: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Green,
    marginBottom: '2%',
   
  }
   

})