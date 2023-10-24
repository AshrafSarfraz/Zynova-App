import {StyleSheet} from 'react-native'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'



export const styles=StyleSheet.create({
    MainCont:{
      flex:1,
     backgroundColor:Colors.Bg
    },
    Header_Cont:{
     paddingBottom:'2%',
     elevation:2,
     backgroundColor:Colors.Bg,
     paddingHorizontal:'2%'
    
    },
    Header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:'2%',
    backgroundColor:Colors.Bg,
    },
    Scan_Cont:{
       flexDirection:'row',
       alignItems:"center",
    
    },
    Scan_Txt:{
         marginLeft:"5%",
         color:Colors.Green,
         fontFamily:Fonts.SF_Medium,
         lineHeight:18,
         fontSize:14
    },
    Scan_Icon:{
     width:30,height:30
    },
    Bobi:{
      width:50,height:50,
      resizeMode:'contain'
    },
    Auth_Container:{
      flexDirection:'row',
      alignItems:"center",
      borderWidth:1,
      height:40,
      paddingHorizontal:'3%',
      borderRadius:10,
      borderColor:Colors.Green
    },
    Auth_Cont:{
      flexDirection:'row',
      alignItems:"center",
      
    },
    login_Text:{
     
         color:Colors.Green,
         fontFamily:Fonts.SF_Medium,
         lineHeight:16,
         fontSize:14
    },
    Input_Cont:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:Colors.White,
      paddingVertical:'3%',
      paddingHorizontal:'4%',
      borderRadius:10,
      alignItems:'center'
    
    },
    SearchBtn:{
       width:200,
     marginLeft:'-18%'
    },
    Input:{
      width:'100%',
      color:Colors.LightGreen,
    },
    
    Bell:{
      width:40,height:40,
      marginRight:'10%'
      
    },
    Heart:{
      width:40,height:40,
     marginRight:"-7%"
    },
    Search_Icon:{
    width:20,height:20
    },
    category_Icon:{
      width:30,height:30
    },
    Icon:{
      width:30,height:30,
    },
    list:{
      width:30,height:30,
    },
    BottomCont:{
      width: '50%',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: Colors.Green,
      alignSelf: 'center',
       zIndex:1,
      borderRadius: 18,
      padding:'5%',
      paddingHorizontal:"8%",
      position: 'absolute',
      top: '87%',
    },
    Btn:{
      alignItems:'center',
      justifyContent:'center',
      width:'40%',
    },
    Map_Txt:{
      color:Colors.White,
       fontSize:12,
       lineHeight:18,
       fontFamily:Fonts.SF_Regular
    },
    listings_Txt:{
      color:'#E2E2E2',
       fontSize:12,
       lineHeight:18,
       fontFamily:Fonts.SF_Regular
    },
    SearchImg:{
      width:'65%',
      height:200,
      alignSelf:'center',
      top:"6%",
      right:'4%'
    },
    Logo1:{
      width:100,
      height:100,
      bottom:'63%',
      right:'3%',
      alignSelf:'flex-end', 
    },
    Logo2:{
      width:100,
      height:100,
     bottom:"15%",
      left:'5%'
    },
    LogosCont:{
      alignItems:'flex-start',
    },
    
    Welcome_Txt:{
      fontSize:24,
      fontFamily:Fonts.SF_SemiBold,
      lineHeight:30,
      color:Colors.Green,
      width:'90%',
      alignSelf:'center',
      textAlign:'center',
      bottom:"13%"
    
    }
    
    
    
    
    
    
    
    
    })