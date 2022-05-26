import React from 'react';
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
const Buy=()=>{
    return(
        <View style={styles.container}>
         <View style={styles.amountContainer}>
           <View style={{flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}> 
                                    <Text style={styles.wallet}>Balance Available <Icon name="wallet" size={15} color="#fff" /></Text>
                               
                                  <Text style={styles.walletAmt}>$100</Text>
                        </View>
                
            </View>
        <View >
        {/* <Image style={styles.moneyImg} source={MoneyImg}/> */}
            <View style={styles.formArea}>
            <Text style={styles.heading}>Buy</Text>
            
            <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Wallet ID"
                placeholderTextColor="#003f5c"
            />
            </View>
            
            <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Amount to Buy"
                placeholderTextColor="#003f5c"
            />
            </View>
            <TouchableOpacity  style={styles.loginBtn}>
                <Text style={styles.loginText}>Buy</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d9ecff',
        // justifyContent: 'center',
        flexDirection:'column'
    },
    topRow:{
        flex:1,
        backgroundColor:'blue'
    },
    bottomRow:{
        flex:1,
        backgroundColor:'white'
    },
  heading:{
      fontSize:20,
      marginBottom:10,
      textAlign:'center'
  },
    moneyImg:{
        width:310,
        height:310
    },
    formArea:{
        padding:40,
        position:'relative',
        backgroundColor:'white',
        borderRadius:10,
        marginBottom:30,
        width:'95%',
        alignSelf:'center'
    },
    inputView: {
        backgroundColor: "#fff",
        width: "100%",
        height: 45,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        borderBottomWidth:1,
        borderBottomColor:"#525252"
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width:'100%'
      },
      loginBtn:
        {
        width:'100%',
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#0057ad",
        },
        loginText:{
            color:'#fff',
            fontWeight:'bold'
        },
        errorMessage:{
            color:'#a30021'
        },
        walletAmt:{
            color:'white',
            fontSize:30,
            paddingTop:5,
            textAlign:'center',
            alignSelf:'center',
        },
        amountContainer:{
            minHeight:100,
            padding:10,
            textAlign:'center',
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#0057ad',
            marginBottom:30
        },
        wallet:{
            color:'white',
            textAlign:'center',
            opacity:0.9
        },
});

export default Buy;