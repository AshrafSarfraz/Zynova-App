
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity,Image,Modal,Text,StyleSheet,FlatList } from 'react-native';
import { GiftedChat, IMessage, Bubble } from 'react-native-gifted-chat';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../../Themes/Colors';
import { Fonts } from '../../../../Themes/Fonts';
import { Back_Icon, Dots, Exclimation, Send, Tick2 } from '../../../../Themes/Images';
import { RentedData } from './DummyData';
import ReportAlert from '../../../../Components/Alerts/ReportAlert';





const ChatScreen = ({navigation,}) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  

    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
      setAlertVisible(true);
    };
  
    const hideAlert = () => {
      setAlertVisible(false);
    };
     
  

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails',{Data:item})  }}>
      <View style={styles.Cart}>
        <Image source={item.Image1} style={styles.Product_Img}  resizeMode='contain' />
        <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails',{Data:item})  }}>
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





    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          createdAt: new Date(),
          name: 'React Native',
          avatar: require('../../../../Assets/Images/Bobi.png'),
          user: {
            _id: 2,
          },
        },
        {
          _id: 2,
          text: 'Lorem ipsum dolor sit amet, ',
          createdAt: new Date(),
          name: 'React Native',
          avatar: require('../../../../Assets/Images/Bobi.png'),
          user: {
            _id: 2,
          },
          sent: true,
          received: true,
        },
      ]);
    }, []);
 
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#233930',
            padding: '4%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 20,
            marginBottom: '3%',
            width: '85%',
            alignItems: 'flex-start',
          },
          right: {
            backgroundColor: '#038F54',
            padding: '4%',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 10,
            marginBottom: '3%',
            width: '85%',
            alignItems: 'flex-start',
          },
        }}
        textStyle={{
          left: {
            color: 'white',
            textAlign: 'left',
            width: 200,
          },
          right: {
            color: Colors.White,
            textAlign: 'justify',
            width: 200,
          },
        }}
      ></Bubble>
    );
  };
  const renderTime = (props) => {
    return (
      <Text
        style={{
          color: '#FFFFFF',
          position: 'absolute',
          right: '-30%', // Align the timestamp to the right
          bottom: 5, // Position it at the bottom
        }}
      >
        {/* {moment(props.currentMessage.createdAt).format('hh:mm A')} */}
        {moment(props.currentMessage.createdAt).format('hh:mm ')}
      </Text>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar {...props}>
        
        <TextInput
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={{ flex: 1, fontSize: 16, marginLeft: 10 }}
        />
      </InputToolbar>
    );
  };
  const handleSend = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        _id: Math.round(Math.random() * 1000000).toString(),
        text: inputText.trim(),
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User', 
        },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, [newMessage]));

      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header_Cont} >
    <View  style={styles.Header} >
      <View style={{flexDirection:'row',alignItems:'center'}} >
        <TouchableOpacity  onPress={()=>{navigation.goBack()}} >
        <Image source={Back_Icon} style={styles.Go_Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Alex} >Alex Hales</Text>
        </View>
        <TouchableOpacity onPress={showAlert} >
        <Image source={Dots} style={styles.Dots} />
        </TouchableOpacity>
   </View>
   <View style={styles.Product} >
        <FlatList
          data={RentedData}
          renderItem={renderItem}
        />
        </View>
   
   </View>










      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderTime={renderTime}
        renderAvatar={null}
        
      />
      <View style={styles.InputOuter_View}>
        <View style={{backgroundColor:Colors.Bg,marginBottom:"5%",flexDirection:'row',width:'100%',paddingTop:'1%',borderTopWidth:0.5,borderColor:Colors.Grey9}} >
        <View style={styles.InputContainer}>
        <TouchableOpacity  style={styles.Touch_Image} onPress={() => {alert('Smile')}}>
          <Icon name="smile-o" size={20} color={Colors.Green} />
        </TouchableOpacity>
        <TextInput    style={styles.Textinputcontainer}

          placeholder=" Type a message..."
          placeholderTextColor={Colors.Grey9}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
         {/* <TouchableOpacity style={styles.Touch_Image}>
       <Image source={require('../../../../Assets/Images/Bobi.png')} style={styles.VectorImage} />
         </TouchableOpacity>
      <TouchableOpacity style={styles.Touch_Image}>
        <Icon name="camera" size={15} color={Colors.DarkPurple} /> 
         </TouchableOpacity> */}
         </View>
        <View style={styles.Circular_View}>
        <TouchableOpacity onPress={handleSend}>
          <Image
            resizeMode='contain'
            style={styles.Send_Image}
             source={Send}
          />
        </TouchableOpacity>
      </View>
      </View>
      </View>


     
      <ReportAlert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('ReportUser')}}
      />  

      
    </View>
  );
};

export default ChatScreen;




const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor:Colors.Bg,    
    },
    Header_Cont:{
     borderBottomWidth:0.5,
     color:Colors.Grey9,
     padding:'3%',
     paddingBottom:'0%'
    },
    Header:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginVertical:'2%'
    },
    Go_Back_Icon:{
     width:30,height:30,
     tintColor:Colors.Black,
     marginRight:'5%'
    },
    Alex:{
     fontSize:20,fontFamily:Fonts.SF_SemiBold,color:Colors.Green
    },
    Dots:{
     width:25,height:25,tintColor:'#000000',
     resizeMode:'center'
    },
    Buttons_View:{
      flexDirection:'row',
      height:77,
      width:"90%",
      marginHorizontal:'5%'
    },
    Button_View:{
      width:"42%",
      backgroundColor:Colors.White,
      borderRadius:10,
      borderWidth:1,
      borderColor:Colors.DarkPurple,
      height:46,
    },
    Button_Style:{
      color:Colors.DarkPurple,
      fontWeight:'700',
      fontSize:12,
      fontFamily:Fonts.SF_Bold
    },
    Line_View:{
      width:'100%',
      height:2,
      backgroundColor:Colors.Grey4
    },
    footer: {
    
      height: 35,
      backgroundColor: Colors.White,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  voucherDropdownButton: {
    flexDirection: 'row',
    height: 54,
    borderWidth: 1,
    borderColor: Colors.grey1,
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  voucherDropdownButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2%',
  },
  voucherIcon: {
    height: 28,
    width: 28,
  },
  voucherButtonText: {
    fontSize: 18,
    fontFamily: Fonts.SF_Bold,
    color: Colors.DarkPurple,
    marginLeft: '5%',
  },
  dropdownIcon: {
    height: 23,
    width: 23,
    marginRight: '5%',
  },
  voucherDropdownList: {

  },
  dropdownItem: {

    backgroundColor:Colors.DarkPurple,
    marginVertical:'5%',
    height:70,
    marginHorizontal:"5%",
    borderRadius:10
    
  },
  dropdownItemText: {
    fontSize: 18,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    marginLeft:'5%',
    marginTop:'5%'
  },
  dropdownItemdesc:{
    fontSize: 14,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    marginLeft:'5%',
    bottom:5
  },
  // container: {
  //   paddingVertical: 16,
  // },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
 
    bottom: '10%',
    justifyContent:'space-between',
    marginHorizontal:"5%",
    marginVertical:"7%",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    // Add any additional styling for the icon
  },
  text: {
    fontSize: 15,
  fontFamily:Fonts.SF_SemiBold,
  color:Colors.DarkPurple,
  width:'79%'
  },
previousTxt:{
  fontFamily:Fonts.SF_SemiBold,color:Colors.DarkPurple,fontSize:22,marginLeft:"5%"
},
mainContainer:{
  flex: 1,
   marginBottom: '1%'
},
Send_Image:{
   height: 55, 
   width: 55,
  
   },
Circular_View:{
  height:65,
  width:100,
  top:'0%',
  paddingLeft:'2%',
  justifyContent:'center',
  alignSelf:'center',
  marginBottom:"10%",
  
},
Smile_Icon:{
  width:20,
  height:20,
},
IconImage:{
  width:15,
  height:15,
},
textInput:{
  
},
modalContainer: {
  flex: 1,
  width: '100%',

  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  marginLeft:'5%',
  marginRight:"5%",
 alignSelf:'center'
},
modalChildContainer: {
  height:"8%",
  width: '35%',
   backgroundColor: Colors.White,
  borderRadius: 5,
  top:'7%',
 left:'10%',
 flexDirection:'row'
   
},
ReportImage:{
width:16,
height:16,
alignSelf:'center',
marginLeft:'5%'
},
modalbutton:{
  width:'50%',
  height:40,
  backgroundColor:Colors.White,
  borderRadius:10,
  alignSelf:'center',
  justifyContent:'center'
},
modalbutton1:{
  width:'45%',
  height:58,
  backgroundColor:Colors.White,
  borderRadius:10,
  alignSelf:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:Colors.DarkPurple
},
paySuccess_button: {
  marginTop:'5%',
  fontFamily: Fonts.SF_Bold,
  FontWeight: "700",
  FontSize: 16,
  Lineheight: 22.13,
  color: Colors.Black,
  alignSelf:'center',

  
},
paySuccess_buttonYes: {
  marginTop:'5%',
  fontFamily: Fonts.SF_Bold,
  FontWeight: "700",
  FontSize: 16,
  Lineheight: 22,
  color: Colors.Red,
  alignSelf:'center',

  
},

InputOuter_View: {
   flexDirection: 'row', 
   alignItems: 'center',
    backgroundColor: 'red',
    height:20,
    width:"100%",
  
   },

InputContainer:{
  flexDirection:'row',
  width:"75%",
  backgroundColor:Colors.White,
  borderRadius:12,
  height:55,
  margin:"2%",
  elevation:1,
  paddingHorizontal:'2%'
  
},
inputToolbar:{
  width:"100%",

},
VectorImage:{
width:14.8,
height:16, 
alignSelf:'center',
marginRight:10,
resizeMode:'contain'
},
Textinputcontainer:{
width:"70%"
},
Touch_Image:{
  alignSelf:'center',
 marginLeft:5,
},
Cart: {
  backgroundColor: Colors.White,
  borderRadius: 10,
  marginBottom:'3%',
  width: '100%',
  paddingHorizontal: '2%',
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
});